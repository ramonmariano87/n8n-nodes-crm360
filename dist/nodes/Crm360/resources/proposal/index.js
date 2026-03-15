"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const showOnlyForProposal = {
    resource: ['proposal'],
};
exports.proposalDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProposal,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a proposal',
                description: 'Create a new proposal',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/proposals',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a proposal',
                description: 'Delete a proposal',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/proposals/{{$parameter.proposalId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a proposal',
                description: 'Get a single proposal by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/proposals/{{$parameter.proposalId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many proposals',
                description: 'Get a list of proposals',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/proposals',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a proposal',
                description: 'Update an existing proposal',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/proposals/{{$parameter.proposalId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.proposalGetManyDescription,
    ...get_1.proposalGetDescription,
    ...create_1.proposalCreateDescription,
    ...update_1.proposalUpdateDescription,
    ...delete_1.proposalDeleteDescription,
];
//# sourceMappingURL=index.js.map