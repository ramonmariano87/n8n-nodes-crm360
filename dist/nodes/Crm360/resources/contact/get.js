"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['contact'],
};
exports.contactGetDescription = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the contact to retrieve',
    },
];
//# sourceMappingURL=get.js.map