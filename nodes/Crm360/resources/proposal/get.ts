import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['get'],
	resource: ['proposal'],
};

export const proposalGetDescription: INodeProperties[] = [
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the proposal to retrieve',
	},
];
