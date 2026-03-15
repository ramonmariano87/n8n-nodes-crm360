import type { INodeProperties } from 'n8n-workflow';
import { productGetManyDescription } from './getMany';
import { productGetDescription } from './get';
import { productCreateDescription } from './create';
import { productUpdateDescription } from './update';
import { productDeleteDescription } from './delete';

const showOnlyForProduct = {
	resource: ['product'],
};

export const productDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProduct,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a product',
				description: 'Create a new product',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a product',
				description: 'Delete a product',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a product',
				description: 'Get a single product by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many products',
				description: 'Get a list of products',
				routing: {
					request: {
						method: 'GET',
						url: '/products',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a product',
				description: 'Update an existing product',
				routing: {
					request: {
						method: 'PUT',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...productGetManyDescription,
	...productGetDescription,
	...productCreateDescription,
	...productUpdateDescription,
	...productDeleteDescription,
];
