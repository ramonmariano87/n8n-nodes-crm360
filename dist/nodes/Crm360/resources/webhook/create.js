"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookCreateDescription = void 0;
const show = {
    operation: ['create'],
    resource: ['webhook'],
};
exports.webhookCreateDescription = [
    {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show },
        placeholder: 'https://example.com/webhook',
        description: 'The URL to send webhook events to',
        routing: { send: { type: 'body', property: 'url' } },
    },
    {
        displayName: 'Events',
        name: 'events',
        type: 'multiOptions',
        required: true,
        displayOptions: { show },
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
        description: 'Which events to listen for',
        routing: { send: { type: 'body', property: 'events' } },
    },
];
//# sourceMappingURL=create.js.map