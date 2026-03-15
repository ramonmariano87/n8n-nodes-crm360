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
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProduct,
        },
        options: [
            {
                name: 'Criar',
                value: 'create',
                action: 'Criar um produto',
                description: 'Criar um novo produto',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Excluir',
                value: 'delete',
                action: 'Excluir um produto',
                description: 'Excluir um produto',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Buscar',
                value: 'get',
                action: 'Buscar um produto',
                description: 'Buscar um único produto pelo ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/products/{{$parameter.productId}}',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar produtos',
                description: 'Obter uma lista de produtos',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/products',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar um produto',
                description: 'Atualizar um produto existente',
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