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
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForConversation,
        },
        options: [
            {
                name: 'Buscar',
                value: 'get',
                action: 'Buscar uma conversa',
                description: 'Buscar uma única conversa pelo ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/conversations/{{$parameter.conversationId}}',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar conversas',
                description: 'Obter uma lista de conversas',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/conversations',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar uma conversa',
                description: 'Atualizar status ou atribuição de uma conversa',
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