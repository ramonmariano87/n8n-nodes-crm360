"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageGetManyDescription = void 0;
const show = {
    operation: ['getMany'],
    resource: ['message'],
};
exports.messageGetManyDescription = [
    {
        displayName: 'Conversation ID',
        name: 'conversationId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the conversation to get messages from',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: { show },
        typeOptions: { minValue: 1, maxValue: 100 },
        default: 50,
        description: 'Max number of messages to return',
        routing: { send: { type: 'query', property: 'limit' } },
    },
    {
        displayName: 'Options',
        name: 'options',
        type: 'collection',
        placeholder: 'Add Option',
        displayOptions: { show },
        default: {},
        options: [
            {
                displayName: 'Before ID',
                name: 'before_id',
                type: 'number',
                default: 0,
                description: 'Get messages before this message ID (for pagination)',
                routing: { request: { qs: { before_id: '={{$value}}' } } },
            },
            {
                displayName: 'After ID',
                name: 'after_id',
                type: 'number',
                default: 0,
                description: 'Get messages after this message ID',
                routing: { request: { qs: { after_id: '={{$value}}' } } },
            },
        ],
    },
];
//# sourceMappingURL=getMany.js.map