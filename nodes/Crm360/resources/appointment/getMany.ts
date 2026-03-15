import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['appointment'],
};

export const appointmentGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show },
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: { type: 'query', property: 'per_page' },
		},
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
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by title, description, or location',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Scheduled', value: 'scheduled' },
					{ name: 'Confirmed', value: 'confirmed' },
					{ name: 'Cancelled', value: 'cancelled' },
					{ name: 'Completed', value: 'completed' },
				],
				default: 'scheduled',
				routing: { request: { qs: { status: '={{$value}}' } } },
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Meeting', value: 'meeting' },
					{ name: 'Call', value: 'call' },
					{ name: 'Task', value: 'task' },
					{ name: 'Event', value: 'event' },
					{ name: 'Other', value: 'other' },
				],
				default: 'meeting',
				routing: { request: { qs: { type: '={{$value}}' } } },
			},
			{
				displayName: 'User ID',
				name: 'user_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { user_id: '={{$value}}' } } },
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { contact_id: '={{$value}}' } } },
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { deal_id: '={{$value}}' } } },
			},
			{
				displayName: 'Start From',
				name: 'start_from',
				type: 'dateTime',
				default: '',
				routing: { request: { qs: { start_from: '={{$value}}' } } },
			},
			{
				displayName: 'Start To',
				name: 'start_to',
				type: 'dateTime',
				default: '',
				routing: { request: { qs: { start_to: '={{$value}}' } } },
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				options: [
					{ name: 'Start At', value: 'start_at' },
					{ name: 'End At', value: 'end_at' },
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Title', value: 'title' },
				],
				default: 'start_at',
				routing: { request: { qs: { sort_by: '={{$value}}' } } },
			},
			{
				displayName: 'Sort Direction',
				name: 'sort_dir',
				type: 'options',
				options: [
					{ name: 'Ascending', value: 'asc' },
					{ name: 'Descending', value: 'desc' },
				],
				default: 'asc',
				routing: { request: { qs: { sort_dir: '={{$value}}' } } },
			},
		],
	},
];
