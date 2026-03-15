import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getConversations'],
	resource: ['contact'],
};

export const contactGetConversationsDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the contact',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show },
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 25,
		routing: { send: { type: 'query', property: 'per_page' } },
	},
];
