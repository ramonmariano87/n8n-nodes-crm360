"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['proposal'],
};
exports.proposalGetDescription = [
    {
        displayName: 'Proposal ID',
        name: 'proposalId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the proposal to retrieve',
    },
];
//# sourceMappingURL=get.js.map