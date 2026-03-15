import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['delete'],
	resource: ['contact'],
};

export const contactDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the contact to delete',
	},
];
