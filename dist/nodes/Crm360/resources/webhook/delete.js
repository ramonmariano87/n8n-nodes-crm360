"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['webhook'],
};
exports.webhookDeleteDescription = [
    {
        displayName: 'Webhook ID',
        name: 'webhookId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the webhook to delete',
    },
];
//# sourceMappingURL=delete.js.map