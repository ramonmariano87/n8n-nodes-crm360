import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['recordPayment'],
	resource: ['invoice'],
};

export const invoiceRecordPaymentDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the invoice to record payment for',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'Payment amount',
		routing: { send: { type: 'body', property: 'amount' } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show },
		default: {},
		options: [
			{
				displayName: 'Method',
				name: 'method',
				type: 'options',
				options: [
					{ name: 'PIX', value: 'pix' },
					{ name: 'Boleto', value: 'boleto' },
					{ name: 'Credit Card', value: 'credit_card' },
					{ name: 'Debit Card', value: 'debit_card' },
					{ name: 'Transfer', value: 'transfer' },
					{ name: 'Manual', value: 'manual' },
				],
				default: 'manual',
				routing: { send: { type: 'body', property: 'method' } },
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'notes' } },
			},
			{
				displayName: 'Paid At',
				name: 'paid_at',
				type: 'dateTime',
				default: '',
				routing: { send: { type: 'body', property: 'paid_at' } },
			},
		],
	},
];
