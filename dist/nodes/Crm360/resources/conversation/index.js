"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversationDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const update_1 = require("./update");
const showOnlyForConversation = {
    resource: ['conversation'],
};
exports.conversationDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForConversation,
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                action: 'Get a conversation',
                description: 'Get a single conversation by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/conversations/{{$parameter.conversationId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many conversations',
                description: 'Get a list of conversations',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/conversations',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a conversation',
                description: 'Update status or assignment of a conversation',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/conversations/{{$parameter.conversationId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.conversationGetManyDescription,
    ...get_1.conversationGetDescription,
    ...update_1.conversationUpdateDescription,
];
//# sourceMappingURL=index.js.map