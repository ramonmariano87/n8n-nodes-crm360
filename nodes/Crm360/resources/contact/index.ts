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
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContact,
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				action: 'Criar um contato',
				description: 'Criar um novo contato',
				routing: {
					request: {
						method: 'POST',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Excluir',
				value: 'delete',
				action: 'Excluir um contato',
				description: 'Excluir um contato (soft delete)',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
			{
				name: 'Buscar',
				value: 'get',
				action: 'Buscar um contato',
				description: 'Buscar um único contato pelo ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}',
					},
				},
			},
			{
				name: 'Buscar Conversas',
				value: 'getConversations',
				action: 'Buscar conversas do contato',
				description: 'Buscar conversas de chat vinculadas a um contato',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}/conversations',
					},
				},
			},
			{
				name: 'Buscar Negócios',
				value: 'getDeals',
				action: 'Buscar negócios do contato',
				description: 'Buscar negócios associados a um contato',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.contactId}}/deals',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar contatos',
				description: 'Obter uma lista de contatos',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar um contato',
				description: 'Atualizar um contato existente',
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
