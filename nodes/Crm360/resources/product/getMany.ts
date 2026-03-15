import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['getMany'],
	resource: ['product'],
};

export const productGetManyDescription: INodeProperties[] = [
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
				description: 'Search by name, SKU, or description',
				routing: { request: { qs: { search: '={{$value}}' } } },
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Product', value: 'product' },
					{ name: 'Service', value: 'service' },
				],
				default: 'product',
				routing: { request: { qs: { type: '={{$value}}' } } },
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				routing: { request: { qs: { category_id: '={{$value}}' } } },
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: true,
				routing: { request: { qs: { is_active: '={{$value}}' } } },
			},
			{
				displayName: 'Has Variations',
				name: 'has_variations',
				type: 'boolean',
				default: false,
				routing: { request: { qs: { has_variations: '={{$value}}' } } },
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				options: [
					{ name: 'Name', value: 'name' },
					{ name: 'Price', value: 'price' },
					{ name: 'SKU', value: 'sku' },
					{ name: 'Created At', value: 'created_at' },
					{ name: 'Stock Quantity', value: 'stock_quantity' },
				],
				default: 'name',
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
