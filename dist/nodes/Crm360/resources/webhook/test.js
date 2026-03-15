"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookTestDescription = void 0;
const show = {
    operation: ['test'],
    resource: ['webhook'],
};
exports.webhookTestDescription = [
    {
        displayName: 'Webhook ID',
        name: 'webhookId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the webhook to test',
    },
];
//# sourceMappingURL=test.js.map