import type { INodeProperties } from 'n8n-workflow';
import { contactGetManyDescription } from './getMany';
import { contactGetDescription } from './get';
import { contactCreateDescription } from './create';
import { contactUpdateDescription } from './update';
import { contactDeleteDescription } from './delete';
import { contactGetDealsDescription } from './getDeals';
import { contactGetConversationsDescription } from './getConversations';

const showOnlyForContact = {
	resource: ['contact'],
};

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContact,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a contact',
				description: 'Create a new contact',
				routing: {
					request: {
						method: 'POST',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a contact',
				description: 'Soft delete a contact',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a contact',
				description: 'Get a single contact by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
			{
				name: 'Get Conversations',
				value: 'getConversations',
				action: 'Get contact conversations',
				description: 'Get chat conversations linked to a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}/conversations',
					},
				},
			},
			{
				name: 'Get Deals',
				value: 'getDeals',
				action: 'Get contact deals',
				description: 'Get deals associated with a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}/deals',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many contacts',
				description: 'Get a list of contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a contact',
				description: 'Update an existing contact',
				routing: {
					request: {
						method: 'PUT',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...contactGetManyDescription,
	...contactGetDescription,
	...contactCreateDescription,
	...contactUpdateDescription,
	...contactDeleteDescription,
	...contactGetDealsDescription,
	...contactGetConversationsDescription,
];
