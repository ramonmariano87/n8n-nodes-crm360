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
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWebhook,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a webhook',
				description: 'Create a new outbound webhook',
				routing: {
					request: {
						method: 'POST',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a webhook',
				description: 'Delete a webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many webhooks',
				description: 'Get all configured webhooks',
				routing: {
					request: {
						method: 'GET',
						url: '/webhooks',
					},
				},
			},
			{
				name: 'Test',
				value: 'test',
				action: 'Test a webhook',
				description: 'Send a test event to a webhook',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks/{{$parameter.webhookId}}/test',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a webhook',
				description: 'Update an existing webhook',
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
