import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { contactDescription } from './resources/contact';
import { conversationDescription } from './resources/conversation';
import { messageDescription } from './resources/message';
import { webhookDescription } from './resources/webhook';

export class Crm360 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CRM 360',
		name: 'crm360',
		icon: 'file:../../icons/crm360.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the CRM 360 API',
		defaults: {
			name: 'CRM 360',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crm360Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.baseUrl?.replace(/\\/$/, "")}}/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Conversation',
						value: 'conversation',
					},
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
				],
				default: 'contact',
			},
			...contactDescription,
			...conversationDescription,
			...messageDescription,
			...webhookDescription,
		],
	};
}
