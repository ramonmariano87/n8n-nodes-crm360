"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['product'],
};
exports.productGetDescription = [
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the product to retrieve',
    },
];
//# sourceMappingURL=get.js.map