import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['delete'],
	resource: ['proposal'],
};

export const proposalDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the proposal to delete',
	},
];
