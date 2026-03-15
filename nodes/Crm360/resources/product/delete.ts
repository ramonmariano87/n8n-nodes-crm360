import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['delete'],
	resource: ['product'],
};

export const productDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the product to delete',
	},
];
