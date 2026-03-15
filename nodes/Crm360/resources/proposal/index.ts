import type { INodeProperties } from 'n8n-workflow';
import { proposalGetManyDescription } from './getMany';
import { proposalGetDescription } from './get';
import { proposalCreateDescription } from './create';
import { proposalUpdateDescription } from './update';
import { proposalDeleteDescription } from './delete';

const showOnlyForProposal = {
	resource: ['proposal'],
};

export const proposalDescription: INodeProperties[] = [
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
	...proposalGetManyDescription,
	...proposalGetDescription,
	...proposalCreateDescription,
	...proposalUpdateDescription,
	...proposalDeleteDescription,
];
