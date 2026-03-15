"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['contact'],
};
exports.contactDeleteDescription = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the contact to delete',
    },
];
//# sourceMappingURL=delete.js.map