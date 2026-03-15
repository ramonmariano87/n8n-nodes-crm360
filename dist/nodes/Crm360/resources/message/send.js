"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSendDescription = void 0;
const show = {
    operation: ['send'],
    resource: ['message'],
};
exports.messageSendDescription = [
    {
        displayName: 'Conversation ID',
        name: 'conversationId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the conversation to send to',
    },
    {
        displayName: 'Message Type',
        name: 'messageType',
        type: 'options',
        displayOptions: { show },
        options: [
            { name: 'Text', value: 'text' },
            { name: 'Image', value: 'image' },
            { name: 'Document', value: 'document' },
            { name: 'Video', value: 'video' },
            { name: 'Audio', value: 'audio' },
        ],
        default: 'text',
        routing: { send: { type: 'body', property: 'type' } },
    },
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        typeOptions: { rows: 3 },
        default: '',
        displayOptions: {
            show: {
                ...show,
            },
        },
        description: 'Text content of the message (or caption for media)',
        routing: { send: { type: 'body', property: 'content' } },
    },
    {
        displayName: 'Media URL',
        name: 'mediaUrl',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                ...show,
                messageType: ['image', 'document', 'video', 'audio'],
            },
        },
        description: 'Public URL of the media file to send',
        routing: { send: { type: 'body', property: 'media_url' } },
    },
    {
        displayName: 'Filename',
        name: 'filename',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                ...show,
                messageType: ['document'],
            },
        },
        description: 'Filename for the document',
        routing: { send: { type: 'body', property: 'filename' } },
    },
];
//# sourceMappingURL=send.js.map