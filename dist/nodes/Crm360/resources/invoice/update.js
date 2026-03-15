"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceUpdateDescription = void 0;
const show = {
    operation: ['update'],
    resource: ['invoice'],
};
exports.invoiceUpdateDescription = [
    {
        displayName: 'Invoice ID',
        name: 'invoiceId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the invoice to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        displayOptions: { show },
        default: {},
        options: [
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'title' } },
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                typeOptions: { rows: 3 },
                default: '',
                routing: { send: { type: 'body', property: 'description' } },
            },
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Draft', value: 'draft' },
                    { name: 'Pending', value: 'pending' },
                    { name: 'Sent', value: 'sent' },
                    { name: 'Paid', value: 'paid' },
                    { name: 'Cancelled', value: 'cancelled' },
                ],
                default: 'pending',
                routing: { send: { type: 'body', property: 'status' } },
            },
            {
                displayName: 'Due Date',
                name: 'due_date',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'body', property: 'due_date' } },
            },
            {
                displayName: 'Contact ID',
                name: 'contact_id',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'contact_id' } },
            },
            {
                displayName: 'Discount Amount',
                name: 'discount_amount',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'discount_amount' } },
            },
            {
                displayName: 'Discount Type',
                name: 'discount_type',
                type: 'options',
                options: [
                    { name: 'Fixed', value: 'fixed' },
                    { name: 'Percent', value: 'percent' },
                ],
                default: 'fixed',
                routing: { send: { type: 'body', property: 'discount_type' } },
            },
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                typeOptions: { rows: 3 },
                default: '',
                routing: { send: { type: 'body', property: 'notes' } },
            },
            {
                displayName: 'Terms',
                name: 'terms',
                type: 'string',
                typeOptions: { rows: 3 },
                default: '',
                routing: { send: { type: 'body', property: 'terms' } },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map