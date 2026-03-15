import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['update'],
	resource: ['conversation'],
};

export const conversationUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Conversation ID',
		name: 'conversationId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the conversation to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show },
		default: {},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Open', value: 'open' },
					{ name: 'Pending', value: 'pending' },
					{ name: 'Resolved', value: 'resolved' },
				],
				default: 'open',
				routing: { send: { type: 'body', property: 'status' } },
			},
			{
				displayName: 'Assigned User ID',
				name: 'assigned_user_id',
				type: 'number',
				default: 0,
				description: 'Assign to a user (0 or empty to unassign)',
				routing: { send: { type: 'body', property: 'assigned_user_id' } },
			},
			{
				displayName: 'Assigned Department ID',
				name: 'assigned_department_id',
				type: 'number',
				default: 0,
				routing: { send: { type: 'body', property: 'assigned_department_id' } },
			},
		],
	},
];
