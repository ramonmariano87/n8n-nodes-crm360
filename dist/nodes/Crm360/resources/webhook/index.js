"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookDescription = void 0;
const getMany_1 = require("./getMany");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const test_1 = require("./test");
const showOnlyForWebhook = {
    resource: ['webhook'],
};
exports.webhookDescription = [
    {
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForWebhook,
        },
        options: [
            {
                name: 'Criar',
                value: 'create',
                action: 'Criar um webhook',
                description: 'Criar um novo webhook de saída',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/webhooks',
                    },
                },
            },
            {
                name: 'Excluir',
                value: 'delete',
                action: 'Excluir um webhook',
                description: 'Excluir um webhook',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/webhooks/{{$parameter.webhookId}}',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar webhooks',
                description: 'Obter todos os webhooks configurados',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/webhooks',
                    },
                },
            },
            {
                name: 'Testar',
                value: 'test',
                action: 'Testar um webhook',
                description: 'Enviar um evento de teste para um webhook',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/webhooks/{{$parameter.webhookId}}/test',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar um webhook',
                description: 'Atualizar um webhook existente',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/webhooks/{{$parameter.webhookId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.webhookGetManyDescription,
    ...create_1.webhookCreateDescription,
    ...update_1.webhookUpdateDescription,
    ...delete_1.webhookDeleteDescription,
    ...test_1.webhookTestDescription,
];
//# sourceMappingURL=index.js.map