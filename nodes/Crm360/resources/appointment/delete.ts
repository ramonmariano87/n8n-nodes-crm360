import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['delete'],
	resource: ['appointment'],
};

export const appointmentDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Appointment ID',
		name: 'appointmentId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the appointment to delete',
	},
];
