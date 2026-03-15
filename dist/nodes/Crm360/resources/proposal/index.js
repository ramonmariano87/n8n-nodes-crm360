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
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProposal,
        },
        options: [
            {
                name: 'Criar',
                value: 'create',
                action: 'Criar uma proposta',
                description: 'Criar uma nova proposta',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/proposals',
                    },
                },
            },
            {
                name: 'Excluir',
                value: 'delete',
                action: 'Excluir uma proposta',
                description: 'Excluir uma proposta',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/proposals/{{$parameter.proposalId}}',
                    },
                },
            },
            {
                name: 'Buscar',
                value: 'get',
                action: 'Buscar uma proposta',
                description: 'Buscar uma única proposta pelo ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/proposals/{{$parameter.proposalId}}',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar propostas',
                description: 'Obter uma lista de propostas',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/proposals',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar uma proposta',
                description: 'Atualizar uma proposta existente',
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