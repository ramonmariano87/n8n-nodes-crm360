"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversationGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['conversation'],
};
exports.conversationGetDescription = [
    {
        displayName: 'Conversation ID',
        name: 'conversationId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the conversation',
    },
];
//# sourceMappingURL=get.js.map