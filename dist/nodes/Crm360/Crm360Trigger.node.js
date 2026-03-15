"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crm360Trigger = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const crypto_1 = require("crypto");
class Crm360Trigger {
    constructor() {
        this.description = {
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
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
        this.webhookMethods = {
            default: {
                async checkExists() {
                    var _a;
                    const webhookData = this.getWorkflowStaticData('node');
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    if (webhookData.webhookId) {
                        const credentials = await this.getCredentials('crm360Api');
                        const baseUrl = credentials.baseUrl.replace(/\/$/, '');
                        try {
                            const options = {
                                method: 'GET',
                                url: `${baseUrl}/api/v1/webhooks/${webhookData.webhookId}`,
                                json: true,
                            };
                            const response = await this.helpers.httpRequestWithAuthentication.call(this, 'crm360Api', options);
                            if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.url) === webhookUrl) {
                                return true;
                            }
                        }
                        catch {
                        }
                    }
                    return false;
                },
                async create() {
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    const events = this.getNodeParameter('events');
                    const credentials = await this.getCredentials('crm360Api');
                    const baseUrl = credentials.baseUrl.replace(/\/$/, '');
                    const options = {
                        method: 'POST',
                        url: `${baseUrl}/api/v1/webhooks`,
                        body: {
                            url: webhookUrl,
                            events: events,
                            is_active: true,
                        },
                        json: true,
                    };
                    const response = await this.helpers.httpRequestWithAuthentication.call(this, 'crm360Api', options);
                    const webhookData = this.getWorkflowStaticData('node');
                    webhookData.webhookId = response.data.id;
                    webhookData.webhookSecret = response.data.secret;
                    return true;
                },
                async delete() {
                    const webhookData = this.getWorkflowStaticData('node');
                    if (webhookData.webhookId) {
                        const credentials = await this.getCredentials('crm360Api');
                        const baseUrl = credentials.baseUrl.replace(/\/$/, '');
                        try {
                            const options = {
                                method: 'DELETE',
                                url: `${baseUrl}/api/v1/webhooks/${webhookData.webhookId}`,
                                json: true,
                            };
                            await this.helpers.httpRequestWithAuthentication.call(this, 'crm360Api', options);
                        }
                        catch {
                        }
                        delete webhookData.webhookId;
                        delete webhookData.webhookSecret;
                    }
                    return true;
                },
            },
        };
    }
    async webhook() {
        const req = this.getRequestObject();
        const body = this.getBodyData();
        const webhookData = this.getWorkflowStaticData('node');
        if (webhookData.webhookSecret) {
            const signature = req.headers['x-webhook-signature'];
            const rawBody = JSON.stringify(body);
            const expectedSignature = (0, crypto_1.createHmac)('sha256', webhookData.webhookSecret)
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
exports.Crm360Trigger = Crm360Trigger;
//# sourceMappingURL=Crm360Trigger.node.js.map