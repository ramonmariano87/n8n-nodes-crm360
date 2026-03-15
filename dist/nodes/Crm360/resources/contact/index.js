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
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForContact,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a contact',
                description: 'Create a new contact',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/contacts',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a contact',
                description: 'Soft delete a contact',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/contacts/{{$parameter.contactId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a contact',
                description: 'Get a single contact by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}',
                    },
                },
            },
            {
                name: 'Get Conversations',
                value: 'getConversations',
                action: 'Get contact conversations',
                description: 'Get chat conversations linked to a contact',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}/conversations',
                    },
                },
            },
            {
                name: 'Get Deals',
                value: 'getDeals',
                action: 'Get contact deals',
                description: 'Get deals associated with a contact',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/contacts/{{$parameter.contactId}}/deals',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many contacts',
                description: 'Get a list of contacts',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/contacts',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a contact',
                description: 'Update an existing contact',
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