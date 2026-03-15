import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['get'],
	resource: ['appointment'],
};

export const appointmentGetDescription: INodeProperties[] = [
	{
		displayName: 'Appointment ID',
		name: 'appointmentId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the appointment to retrieve',
	},
];
