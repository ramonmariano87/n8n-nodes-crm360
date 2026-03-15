"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['proposal'],
};
exports.proposalDeleteDescription = [
    {
        displayName: 'Proposal ID',
        name: 'proposalId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the proposal to delete',
    },
];
//# sourceMappingURL=delete.js.map