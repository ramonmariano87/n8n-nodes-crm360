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
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForWebhook,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a webhook',
                description: 'Create a new outbound webhook',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/webhooks',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a webhook',
                description: 'Delete a webhook',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/webhooks/{{$parameter.webhookId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many webhooks',
                description: 'Get all configured webhooks',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/webhooks',
                    },
                },
            },
            {
                name: 'Test',
                value: 'test',
                action: 'Test a webhook',
                description: 'Send a test event to a webhook',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/webhooks/{{$parameter.webhookId}}/test',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a webhook',
                description: 'Update an existing webhook',
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