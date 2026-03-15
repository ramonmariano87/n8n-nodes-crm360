import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['get'],
	resource: ['product'],
};

export const productGetDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the product to retrieve',
	},
];
