"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const showOnlyForProduct = {
    resource: ['product'],
};
exports.productDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProduct,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a product',
                description: 'Create a new product',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a product',
                description: 'Delete a product',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a product',
                description: 'Get a single product by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many products',
                description: 'Get a list of products',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a product',
                description: 'Update an existing product',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.productGetManyDescription,
    ...get_1.productGetDescription,
    ...create_1.productCreateDescription,
    ...update_1.productUpdateDescription,
    ...delete_1.productDeleteDescription,
];
//# sourceMappingURL=index.js.map