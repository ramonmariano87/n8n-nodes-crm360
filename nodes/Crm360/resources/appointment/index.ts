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
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAppointment,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an appointment',
				description: 'Create a new appointment',
				routing: {
					request: {
						method: 'POST',
						url: '/appointments',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an appointment',
				description: 'Delete an appointment',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/appointments/{{$parameter.appointmentId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an appointment',
				description: 'Get a single appointment by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/appointments/{{$parameter.appointmentId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many appointments',
				description: 'Get a list of appointments',
				routing: {
					request: {
						method: 'GET',
						url: '/appointments',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an appointment',
				description: 'Update an existing appointment',
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
