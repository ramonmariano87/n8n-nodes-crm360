"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceGetPaymentsDescription = void 0;
const show = {
    operation: ['getPayments'],
    resource: ['invoice'],
};
exports.invoiceGetPaymentsDescription = [
    {
        displayName: 'Invoice ID',
        name: 'invoiceId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the invoice to get payments for',
    },
];
//# sourceMappingURL=getPayments.js.map