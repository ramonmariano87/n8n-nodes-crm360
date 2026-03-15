"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['invoice'],
};
exports.invoiceDeleteDescription = [
    {
        displayName: 'Invoice ID',
        name: 'invoiceId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the invoice to delete',
    },
];
//# sourceMappingURL=delete.js.map