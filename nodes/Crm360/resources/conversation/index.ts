import type { INodeProperties } from 'n8n-workflow';
import { conversationGetManyDescription } from './getMany';
import { conversationGetDescription } from './get';
import { conversationUpdateDescription } from './update';

const showOnlyForConversation = {
	resource: ['conversation'],
};

export const conversationDescription: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForConversation,
		},
		options: [
			{
				name: 'Buscar',
				value: 'get',
				action: 'Buscar uma conversa',
				description: 'Buscar uma única conversa pelo ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/conversations/{{$parameter.conversationId}}',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar conversas',
				description: 'Obter uma lista de conversas',
				routing: {
					request: {
						method: 'GET',
						url: '/conversations',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar uma conversa',
				description: 'Atualizar status ou atribuição de uma conversa',
				routing: {
					request: {
						method: 'PUT',
						url: '=/conversations/{{$parameter.conversationId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...conversationGetManyDescription,
	...conversationGetDescription,
	...conversationUpdateDescription,
];
