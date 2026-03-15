"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdateDescription = void 0;
const show = {
    operation: ['update'],
    resource: ['contact'],
};
exports.contactUpdateDescription = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the contact to update',
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
                displayName: 'Email',
                name: 'email',
                type: 'string',
                placeholder: 'name@email.com',
                default: '',
                routing: { send: { type: 'body', property: 'email' } },
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'phone' } },
            },
            {
                displayName: 'Mobile',
                name: 'mobile',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'mobile' } },
            },
            {
                displayName: 'Type',
                name: 'type',
                type: 'options',
                options: [
                    { name: 'Lead', value: 'lead' },
                    { name: 'Customer', value: 'customer' },
                    { name: 'Prospect', value: 'prospect' },
                    { name: 'Supplier', value: 'supplier' },
                ],
                default: 'lead',
                routing: { send: { type: 'body', property: 'type' } },
            },
            {
                displayName: 'Source',
                name: 'source',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'source' } },
            },
            {
                displayName: 'Is Active',
                name: 'is_active',
                type: 'boolean',
                default: true,
                routing: { send: { type: 'body', property: 'is_active' } },
            },
            {
                displayName: 'Bot Protected',
                name: 'bot_protected',
                type: 'boolean',
                default: false,
                description: 'Whether to protect this contact from bot messages',
                routing: { send: { type: 'body', property: 'bot_protected' } },
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
                displayName: 'Assigned To (User ID)',
                name: 'assigned_to',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'assigned_to' } },
            },
            {
                displayName: 'Group ID',
                name: 'contact_group_id',
                type: 'number',
                default: 0,
                routing: { send: { type: 'body', property: 'contact_group_id' } },
            },
        ],
    },
];
//# sourceMappingURL=update.js.map