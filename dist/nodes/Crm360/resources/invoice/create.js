"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceCreateDescription = void 0;
const show = {
    operation: ['create'],
    resource: ['invoice'],
};
exports.invoiceCreateDescription = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The contact ID for this invoice',
        routing: { send: { type: 'body', property: 'contact_id' } },
    },
    {
        displayName: 'Due Date',
        name: 'dueDate',
        type: 'dateTime',
        required: true,
        default: '',
        displayOptions: { show },
        description: 'Invoice due date',
        routing: { send: { type: 'body', property: 'due_date' } },
    },
    {
        displayName: 'Items (JSON)',
        name: 'items',
        type: 'json',
        required: true,
        default: '[{"name": "Item 1", "quantity": 1, "unit_price": 100}]',
        displayOptions: { show },
        description: 'Array of invoice items: [{name, quantity, unit_price, description?, tax_rate?, product_id?}]',
        routing: { send: { type: 'body', property: 'items' } },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
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
                displayName: 'Issue Date',
                name: 'issue_date',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'body', property: 'issue_date' } },
            },
            {
                displayName: 'Currency',
                name: 'currency',
                type: 'string',
                default: 'BRL',
                routing: { send: { type: 'body', property: 'currency' } },
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
//# sourceMappingURL=create.js.map