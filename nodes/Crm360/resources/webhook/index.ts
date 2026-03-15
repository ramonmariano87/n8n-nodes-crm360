import type { INodeProperties } from 'n8n-workflow';
import { webhookGetManyDescription } from './getMany';
import { webhookCreateDescription } from './create';
import { webhookUpdateDescription } from './update';
import { webhookDeleteDescription } from './delete';
import { webhookTestDescription } from './test';

const showOnlyForWebhook = {
	resource: ['webhook'],
};

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWebhook,
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				action: 'Criar um webhook',
				description: 'Criar um novo webhook de saída',
				routing: {
					request: {
						method: 'POST',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Excluir',
				value: 'delete',
				action: 'Excluir um webhook',
				description: 'Excluir um webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar webhooks',
				description: 'Obter todos os webhooks configurados',
				routing: {
					request: {
						method: 'GET',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Testar',
				value: 'test',
				action: 'Testar um webhook',
				description: 'Enviar um evento de teste para um webhook',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks/{{$parameter.webhookId}}/test',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar um webhook',
				description: 'Atualizar um webhook existente',
				routing: {
					request: {
						method: 'PUT',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...webhookGetManyDescription,
	...webhookCreateDescription,
	...webhookUpdateDescription,
	...webhookDeleteDescription,
	...webhookTestDescription,
];
