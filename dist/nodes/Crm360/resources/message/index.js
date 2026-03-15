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
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForMessage,
        },
        options: [
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar mensagens de uma conversa',
                description: 'Obter mensagens de uma conversa',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/conversations/{{$parameter.conversationId}}/messages',
                    },
                },
            },
            {
                name: 'Enviar',
                value: 'send',
                action: 'Enviar mensagem em uma conversa',
                description: 'Enviar uma mensagem de texto ou mídia em uma conversa existente',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/conversations/{{$parameter.conversationId}}/messages',
                    },
                },
            },
            {
                name: 'Enviar por Telefone',
                value: 'sendByPhone',
                action: 'Enviar mensagem por número de telefone',
                description: 'Enviar mensagem para um número de telefone (cria a conversa se necessário)',
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