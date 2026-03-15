import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['get'],
	resource: ['conversation'],
};

export const conversationGetDescription: INodeProperties[] = [
	{
		displayName: 'Conversation ID',
		name: 'conversationId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the conversation',
	},
];
