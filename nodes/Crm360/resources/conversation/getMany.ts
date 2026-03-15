import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['conversation'],
};

export const conversationGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show },
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 50,
		description: 'Max number of results to return',
		routing: { send: { type: 'query', property: 'per_page' } },
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
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
					{ name: 'Bot', value: 'bot' },
				],
				default: 'open',
				routing: { request: { qs: { status: '={{$value}}' } } },
			},
			{
				displayName: 'Channel ID',
				name: 'channel_id',
				type: 'number',
				default: 0,
				description: 'Filter by WhatsApp channel ID',
				routing: { request: { qs: { channel_id: '={{$value}}' } } },
			},
			{
				displayName: 'Assigned To (User ID)',
				name: 'assigned_to',
				type: 'number',
				default: 0,
				routing: { request: { qs: { assigned_to: '={{$value}}' } } },
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { contact_id: '={{$value}}' } } },
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by name or phone number',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Is Group',
				name: 'is_group',
				type: 'boolean',
				default: false,
				description: 'Whether to filter group conversations',
				routing: { request: { qs: { is_group: '={{$value}}' } } },
			},
		],
	},
];
