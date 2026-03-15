import type { INodeProperties } from 'n8n-workflow';
import { messageGetManyDescription } from './getMany';
import { messageSendDescription } from './send';
import { messageSendByPhoneDescription } from './sendByPhone';

const showOnlyForMessage = {
	resource: ['message'],
};

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMessage,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get messages from a conversation',
				description: 'Get messages from a conversation',
				routing: {
					request: {
						method: 'GET',
						url: '=/conversations/{{$parameter.conversationId}}/messages',
					},
				},
			},
			{
				name: 'Send',
				value: 'send',
				action: 'Send a message in a conversation',
				description: 'Send a text or media message in an existing conversation',
				routing: {
					request: {
						method: 'POST',
						url: '=/conversations/{{$parameter.conversationId}}/messages',
					},
				},
			},
			{
				name: 'Send by Phone',
				value: 'sendByPhone',
				action: 'Send a message by phone number',
				description: 'Send a message to a phone number (creates conversation if needed)',
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
