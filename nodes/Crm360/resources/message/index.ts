import type { INodeProperties } from 'n8n-workflow';
import { messageGetManyDescription } from './getMany';
import { messageSendDescription } from './send';
import { messageSendByPhoneDescription } from './sendByPhone';

const showOnlyForMessage = {
	resource: ['message'],
};

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMessage,
		},
		options: [
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar mensagens de uma conversa',
				description: 'Obter mensagens de uma conversa',
				routing: {
					request: {
						method: 'GET',
						url: '=/conversations/{{$parameter.conversationId}}/messages',
					},
				},
			},
			{
				name: 'Enviar',
				value: 'send',
				action: 'Enviar mensagem em uma conversa',
				description: 'Enviar uma mensagem de texto ou mídia em uma conversa existente',
				routing: {
					request: {
						method: 'POST',
						url: '=/conversations/{{$parameter.conversationId}}/messages',
					},
				},
			},
			{
				name: 'Enviar por Telefone',
				value: 'sendByPhone',
				action: 'Enviar mensagem por número de telefone',
				description: 'Enviar mensagem para um número de telefone (cria a conversa se necessário)',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/send',
					},
				},
			},
		],
		default: 'send',
	},
	...messageGetManyDescription,
	...messageSendDescription,
	...messageSendByPhoneDescription,
];
