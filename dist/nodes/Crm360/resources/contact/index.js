"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const getDeals_1 = require("./getDeals");
const getConversations_1 = require("./getConversations");
const showOnlyForContact = {
    resource: ['contact'],
};
exports.contactDescription = [
    {
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForContact,
        },
        options: [
            {
                name: 'Criar',
                value: 'create',
                action: 'Criar um contato',
                description: 'Criar um novo contato',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/contacts',
                    },
                },
            },
            {
                name: 'Excluir',
                value: 'delete',
                action: 'Excluir um contato',
                description: 'Excluir um contato (soft delete)',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/contacts/{{$parameter.contactId}}',
                    },
                },
            },
            {
                name: 'Buscar',
                value: 'get',
                action: 'Buscar um contato',
                description: 'Buscar um único contato pelo ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}',
                    },
                },
            },
            {
                name: 'Buscar Conversas',
                value: 'getConversations',
                action: 'Buscar conversas do contato',
                description: 'Buscar conversas de chat vinculadas a um contato',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}/conversations',
                    },
                },
            },
            {
                name: 'Buscar Negócios',
                value: 'getDeals',
                action: 'Buscar negócios do contato',
                description: 'Buscar negócios associados a um contato',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}/deals',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar contatos',
                description: 'Obter uma lista de contatos',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/contacts',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar um contato',
                description: 'Atualizar um contato existente',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/contacts/{{$parameter.contactId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.contactGetManyDescription,
    ...get_1.contactGetDescription,
    ...create_1.contactCreateDescription,
    ...update_1.contactUpdateDescription,
    ...delete_1.contactDeleteDescription,
    ...getDeals_1.contactGetDealsDescription,
    ...getConversations_1.contactGetConversationsDescription,
];
//# sourceMappingURL=index.js.map