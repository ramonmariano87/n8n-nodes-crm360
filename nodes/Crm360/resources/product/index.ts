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
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProduct,
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				action: 'Criar um produto',
				description: 'Criar um novo produto',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
					},
				},
			},
			{
				name: 'Excluir',
				value: 'delete',
				action: 'Excluir um produto',
				description: 'Excluir um produto',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Buscar',
				value: 'get',
				action: 'Buscar um produto',
				description: 'Buscar um único produto pelo ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar produtos',
				description: 'Obter uma lista de produtos',
				routing: {
					request: {
						method: 'GET',
						url: '/products',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar um produto',
				description: 'Atualizar um produto existente',
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
