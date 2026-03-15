import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['proposal'],
};

export const proposalGetManyDescription: INodeProperties[] = [
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
				description: 'Search by number, title, or subject',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Draft', value: 'draft' },
					{ name: 'Sent', value: 'sent' },
					{ name: 'Viewed', value: 'viewed' },
					{ name: 'Accepted', value: 'accepted' },
					{ name: 'Rejected', value: 'rejected' },
					{ name: 'Expired', value: 'expired' },
				],
				default: 'draft',
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
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { deal_id: '={{$value}}' } } },
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				options: [
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Proposal Date', value: 'proposal_date' },
					{ name: 'Valid Until', value: 'valid_until' },
					{ name: 'Total', value: 'total' },
					{ name: 'Number', value: 'number' },
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
