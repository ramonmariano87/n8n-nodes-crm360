import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['contact'],
};

export const contactGetManyDescription: INodeProperties[] = [
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
				description: 'Search by name, email, phone, or document',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Lead', value: 'lead' },
					{ name: 'Customer', value: 'customer' },
					{ name: 'Prospect', value: 'prospect' },
					{ name: 'Supplier', value: 'supplier' },
				],
				default: 'lead',
				description: 'Filter by contact type',
				routing: { request: { qs: { type: '={{$value}}' } } },
			},
			{
				displayName: 'Person Type',
				name: 'person_type',
				type: 'options',
				options: [
					{ name: 'Individual', value: 'individual' },
					{ name: 'Company', value: 'company' },
				],
				default: 'individual',
				routing: { request: { qs: { person_type: '={{$value}}' } } },
			},
			{
				displayName: 'Group ID',
				name: 'group_id',
				type: 'number',
				default: 0,
				description: 'Filter by contact group ID',
				routing: { request: { qs: { group_id: '={{$value}}' } } },
			},
			{
				displayName: 'Assigned To (User ID)',
				name: 'assigned_to',
				type: 'number',
				default: 0,
				description: 'Filter by assigned user ID',
				routing: { request: { qs: { assigned_to: '={{$value}}' } } },
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Filter by contact source',
				routing: { request: { qs: { source: '={{$value}}' } } },
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: true,
				routing: { request: { qs: { is_active: '={{$value}}' } } },
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				options: [
					{ name: 'Name', value: 'name' },
					{ name: 'Email', value: 'email' },
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Updated At', value: 'updated_at' },
					{ name: 'Last Contact At', value: 'last_contact_at' },
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
