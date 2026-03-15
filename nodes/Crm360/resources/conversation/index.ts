import type { INodeProperties } from 'n8n-workflow';
import { conversationGetManyDescription } from './getMany';
import { conversationGetDescription } from './get';
import { conversationUpdateDescription } from './update';

const showOnlyForConversation = {
	resource: ['conversation'],
};

export const conversationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForConversation,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a conversation',
				description: 'Get a single conversation by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/conversations/{{$parameter.conversationId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many conversations',
				description: 'Get a list of conversations',
				routing: {
					request: {
						method: 'GET',
						url: '/conversations',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a conversation',
				description: 'Update status or assignment of a conversation',
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
