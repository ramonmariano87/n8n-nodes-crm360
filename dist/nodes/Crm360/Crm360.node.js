"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crm360 = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const contact_1 = require("./resources/contact");
const conversation_1 = require("./resources/conversation");
const message_1 = require("./resources/message");
const webhook_1 = require("./resources/webhook");
class Crm360 {
    constructor() {
        this.description = {
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
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...contact_1.contactDescription,
                ...conversation_1.conversationDescription,
                ...message_1.messageDescription,
                ...webhook_1.webhookDescription,
            ],
        };
    }
}
exports.Crm360 = Crm360;
//# sourceMappingURL=Crm360.node.js.map