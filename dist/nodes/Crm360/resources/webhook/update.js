"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookUpdateDescription = void 0;
const show = {
    operation: ['update'],
    resource: ['webhook'],
};
exports.webhookUpdateDescription = [
    {
        displayName: 'Webhook ID',
        name: 'webhookId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the webhook to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: { show },
        default: {},
        options: [
            {
                displayName: 'URL',
                name: 'url',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'url' } },
            },
            {
                displayName: 'Events',
                name: 'events',
                type: 'multiOptions',
                options: [
                    { name: 'All Events (*)', value: '*' },
                    { name: 'Contact Created', value: 'contact.created' },
                    { name: 'Contact Updated', value: 'contact.updated' },
                    { name: 'Contact Deleted', value: 'contact.deleted' },
                    { name: 'Conversation Created', value: 'conversation.created' },
                    { name: 'Conversation Updated', value: 'conversation.updated' },
                    { name: 'Message Received', value: 'message.received' },
                    { name: 'Message Sent', value: 'message.sent' },
                ],
                default: ['*'],
                routing: { send: { type: 'body', property: 'events' } },
            },
            {
                displayName: 'Is Active',
                name: 'is_active',
                type: 'boolean',
                default: true,
                description: 'Whether the webhook is active',
                routing: { send: { type: 'body', property: 'is_active' } },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map