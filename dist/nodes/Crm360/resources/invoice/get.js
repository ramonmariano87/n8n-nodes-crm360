"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['invoice'],
};
exports.invoiceGetDescription = [
    {
        displayName: 'Invoice ID',
        name: 'invoiceId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the invoice to retrieve',
    },
];
//# sourceMappingURL=get.js.map