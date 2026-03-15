import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IDataObject,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { createHmac } from 'crypto';

export class Crm360Trigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CRM 360 Trigger',
		name: 'crm360Trigger',
		icon: 'file:../../icons/crm360.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["events"].join(", ")}}',
		description: 'Starts the workflow when CRM 360 events occur',
		defaults: {
			name: 'CRM 360 Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crm360Api',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: [],
				options: [
					{ name: 'All Events', value: '*' },
					{ name: 'Contact Created', value: 'contact.created' },
					{ name: 'Contact Updated', value: 'contact.updated' },
					{ name: 'Contact Deleted', value: 'contact.deleted' },
					{ name: 'Conversation Created', value: 'conversation.created' },
					{ name: 'Conversation Updated', value: 'conversation.updated' },
					{ name: 'Message Received', value: 'message.received' },
					{ name: 'Message Sent', value: 'message.sent' },
				],
				description: 'The events to listen to',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default') as string;

				if (webhookData.webhookId) {
					const credentials = await this.getCredentials('crm360Api');
					const baseUrl = (credentials.baseUrl as string).replace(/\/$/, '');

					try {
						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `${baseUrl}/api/v1/webhooks/${webhookData.webhookId}`,
							json: true,
						};
						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'crm360Api',
							options,
						);
						if (response?.data?.url === webhookUrl) {
							return true;
						}
					} catch {
						// Webhook doesn't exist anymore
					}
				}
				return false;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const events = this.getNodeParameter('events') as string[];
				const credentials = await this.getCredentials('crm360Api');
				const baseUrl = (credentials.baseUrl as string).replace(/\/$/, '');

				const options: IHttpRequestOptions = {
					method: 'POST',
					url: `${baseUrl}/api/v1/webhooks`,
					body: {
						url: webhookUrl,
						events: events,
						is_active: true,
					} as IDataObject,
					json: true,
				};

				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'crm360Api',
					options,
				);

				const webhookData = this.getWorkflowStaticData('node');
				webhookData.webhookId = response.data.id;
				webhookData.webhookSecret = response.data.secret;

				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId) {
					const credentials = await this.getCredentials('crm360Api');
					const baseUrl = (credentials.baseUrl as string).replace(/\/$/, '');

					try {
						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `${baseUrl}/api/v1/webhooks/${webhookData.webhookId}`,
							json: true,
						};
						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'crm360Api',
							options,
						);
					} catch {
						// Already deleted — ignore
					}

					delete webhookData.webhookId;
					delete webhookData.webhookSecret;
				}

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const body = this.getBodyData() as IDataObject;

		// Verify signature if secret is available
		const webhookData = this.getWorkflowStaticData('node');
		if (webhookData.webhookSecret) {
			const signature = req.headers['x-webhook-signature'] as string;
			const rawBody = JSON.stringify(body);
			const expectedSignature = createHmac('sha256', webhookData.webhookSecret as string)
				.update(rawBody)
				.digest('hex');

			if (signature && signature !== expectedSignature) {
				return {
					webhookResponse: 'Invalid signature',
				};
			}
		}

		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}
