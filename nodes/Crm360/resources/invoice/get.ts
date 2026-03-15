import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['get'],
	resource: ['invoice'],
};

export const invoiceGetDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the invoice to retrieve',
	},
];
