"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateDescription = void 0;
const show = {
    operation: ['update'],
    resource: ['product'],
};
exports.productUpdateDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the product to update',
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
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'name' } },
            },
            {
                displayName: 'SKU',
                name: 'sku',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'sku' } },
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
                displayName: 'Type',
                name: 'type',
                type: 'options',
                options: [
                    { name: 'Product', value: 'product' },
                    { name: 'Service', value: 'service' },
                ],
                default: 'product',
                routing: { send: { type: 'body', property: 'type' } },
            },
            {
                displayName: 'Price',
                name: 'price',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'price' } },
            },
            {
                displayName: 'Cost',
                name: 'cost',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'cost' } },
            },
            {
                displayName: 'Unit',
                name: 'unit',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'unit' } },
            },
            {
                displayName: 'Tax Rate (%)',
                name: 'tax_rate',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'tax_rate' } },
            },
            {
                displayName: 'Stock Quantity',
                name: 'stock_quantity',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'stock_quantity' } },
            },
            {
                displayName: 'Is Active',
                name: 'is_active',
                type: 'boolean',
                default: true,
                routing: { send: { type: 'body', property: 'is_active' } },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map