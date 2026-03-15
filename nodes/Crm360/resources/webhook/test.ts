import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['test'],
	resource: ['webhook'],
};

export const webhookTestDescription: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the webhook to test',
	},
];
