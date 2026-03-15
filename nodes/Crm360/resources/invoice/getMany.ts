import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['invoice'],
};

export const invoiceGetManyDescription: INodeProperties[] = [
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
				description: 'Search by number or title',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Draft', value: 'draft' },
					{ name: 'Pending', value: 'pending' },
					{ name: 'Sent', value: 'sent' },
					{ name: 'Viewed', value: 'viewed' },
					{ name: 'Partial', value: 'partial' },
					{ name: 'Paid', value: 'paid' },
					{ name: 'Overdue', value: 'overdue' },
					{ name: 'Cancelled', value: 'cancelled' },
				],
				default: 'pending',
				routing: { request: { qs: { status: '={{$value}}' } } },
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { contact_id: '={{$value}}' } } },
			},
			{
				displayName: 'Due From',
				name: 'due_from',
				type: 'dateTime',
				default: '',
				routing: { request: { qs: { due_from: '={{$value}}' } } },
			},
			{
				displayName: 'Due To',
				name: 'due_to',
				type: 'dateTime',
				default: '',
				routing: { request: { qs: { due_to: '={{$value}}' } } },
			},
			{
				displayName: 'Is Recurring',
				name: 'is_recurring',
				type: 'boolean',
				default: false,
				routing: { request: { qs: { is_recurring: '={{$value}}' } } },
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				options: [
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Due Date', value: 'due_date' },
					{ name: 'Total', value: 'total' },
					{ name: 'Number', value: 'number' },
					{ name: 'Status', value: 'status' },
				],
				default: 'created_at',
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
				default: 'desc',
				routing: { request: { qs: { sort_dir: '={{$value}}' } } },
			},
		],
	},
];
