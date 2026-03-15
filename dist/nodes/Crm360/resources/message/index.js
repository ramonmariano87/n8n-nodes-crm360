"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageDescription = void 0;
const getMany_1 = require("./getMany");
const send_1 = require("./send");
const sendByPhone_1 = require("./sendByPhone");
const showOnlyForMessage = {
    resource: ['message'],
};
exports.messageDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForMessage,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get messages from a conversation',
                description: 'Get messages from a conversation',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/conversations/{{$parameter.conversationId}}/messages',
                    },
                },
            },
            {
                name: 'Send',
                value: 'send',
                action: 'Send a message in a conversation',
                description: 'Send a text or media message in an existing conversation',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/conversations/{{$parameter.conversationId}}/messages',
                    },
                },
            },
            {
                name: 'Send by Phone',
                value: 'sendByPhone',
                action: 'Send a message by phone number',
                description: 'Send a message to a phone number (creates conversation if needed)',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/messages/send',
                    },
                },
            },
        ],
        default: 'send',
    },
    ...getMany_1.messageGetManyDescription,
    ...send_1.messageSendDescription,
    ...sendByPhone_1.messageSendByPhoneDescription,
];
//# sourceMappingURL=index.js.map