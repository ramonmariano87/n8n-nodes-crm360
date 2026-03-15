import type { INodeProperties } from 'n8n-workflow';
import { invoiceGetManyDescription } from './getMany';
import { invoiceGetDescription } from './get';
import { invoiceCreateDescription } from './create';
import { invoiceUpdateDescription } from './update';
import { invoiceDeleteDescription } from './delete';
import { invoiceGetPaymentsDescription } from './getPayments';
import { invoiceRecordPaymentDescription } from './recordPayment';

const showOnlyForInvoice = {
	resource: ['invoice'],
};

export const invoiceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvoice,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an invoice',
				description: 'Create a new invoice',
				routing: {
					request: {
						method: 'POST',
						url: '/invoices',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an invoice',
				description: 'Delete an invoice',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an invoice',
				description: 'Get a single invoice by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many invoices',
				description: 'Get a list of invoices',
				routing: {
					request: {
						method: 'GET',
						url: '/invoices',
					},
				},
			},
			{
				name: 'Get Payments',
				value: 'getPayments',
				action: 'Get invoice payments',
				description: 'Get payments for an invoice',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoiceId}}/payments',
					},
				},
			},
			{
				name: 'Record Payment',
				value: 'recordPayment',
				action: 'Record a payment',
				description: 'Record a payment for an invoice',
				routing: {
					request: {
						method: 'POST',
						url: '=/invoices/{{$parameter.invoiceId}}/payments',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an invoice',
				description: 'Update an existing invoice',
				routing: {
					request: {
						method: 'PUT',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
		],
		default: 'getMany',
	},
	...invoiceGetManyDescription,
	...invoiceGetDescription,
	...invoiceCreateDescription,
	...invoiceUpdateDescription,
	...invoiceDeleteDescription,
	...invoiceGetPaymentsDescription,
	...invoiceRecordPaymentDescription,
];
