"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['product'],
};
exports.productDeleteDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the product to delete',
    },
];
//# sourceMappingURL=delete.js.map