import type { INodeProperties } from 'n8n-workflow';
import { appointmentGetManyDescription } from './getMany';
import { appointmentGetDescription } from './get';
import { appointmentCreateDescription } from './create';
import { appointmentUpdateDescription } from './update';
import { appointmentDeleteDescription } from './delete';

const showOnlyForAppointment = {
	resource: ['appointment'],
};

export const appointmentDescription: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAppointment,
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				action: 'Criar um agendamento',
				description: 'Criar um novo agendamento',
				routing: {
					request: {
						method: 'POST',
						url: '/appointments',
					},
				},
			},
			{
				name: 'Excluir',
				value: 'delete',
				action: 'Excluir um agendamento',
				description: 'Excluir um agendamento',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/appointments/{{$parameter.appointmentId}}',
					},
				},
			},
			{
				name: 'Buscar',
				value: 'get',
				action: 'Buscar um agendamento',
				description: 'Buscar um único agendamento pelo ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/appointments/{{$parameter.appointmentId}}',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar agendamentos',
				description: 'Obter uma lista de agendamentos',
				routing: {
					request: {
						method: 'GET',
						url: '/appointments',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar um agendamento',
				description: 'Atualizar um agendamento existente',
				routing: {
					request: {
						method: 'PUT',
						url: '=/appointments/{{$parameter.appointmentId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...appointmentGetManyDescription,
	...appointmentGetDescription,
	...appointmentCreateDescription,
	...appointmentUpdateDescription,
	...appointmentDeleteDescription,
];
