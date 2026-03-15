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
	...proposalGetManyDescription,
	...proposalGetDescription,
	...proposalCreateDescription,
	...proposalUpdateDescription,
	...proposalDeleteDescription,
];
