"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crm360Trigger = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const crypto_1 = require("crypto");
class Crm360Trigger {
    constructor() {
        this.description = {
            displayName: 'CRM 360 Gatilho',
            name: 'crm360Trigger',
            icon: 'file:../../icons/crm360.svg',
            group: ['trigger'],
            version: 1,
            subtitle: '={{$parameter["events"].join(", ")}}',
            description: 'Inicia o workflow quando eventos do CRM 360 ocorrem',
            defaults: {
                name: 'CRM 360 Gatilho',
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
                    displayName: 'Eventos',
                    name: 'events',
                    type: 'multiOptions',
                    required: true,
                    default: [],
                    options: [
                        { name: 'Todos os eventos', value: '*' },
                        { name: 'Contato criado', value: 'contact.created' },
                        { name: 'Contato atualizado', value: 'contact.updated' },
                        { name: 'Contato excluído', value: 'contact.deleted' },
                        { name: 'Conversa criada', value: 'conversation.created' },
                        { name: 'Conversa atualizada', value: 'conversation.updated' },
                        { name: 'Mensagem recebida', value: 'message.received' },
                        { name: 'Mensagem enviada', value: 'message.sent' },
                        { name: 'Fatura criada', value: 'invoice.created' },
                        { name: 'Fatura atualizada', value: 'invoice.updated' },
                        { name: 'Fatura paga', value: 'invoice.paid' },
                        { name: 'Fatura vencida', value: 'invoice.overdue' },
                        { name: 'Fatura cancelada', value: 'invoice.cancelled' },
                        { name: 'Produto criado', value: 'product.created' },
                        { name: 'Produto atualizado', value: 'product.updated' },
                        { name: 'Produto excluído', value: 'product.deleted' },
                    ],
                    description: 'Os eventos para escutar',
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