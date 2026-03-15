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
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvoice,
		},
		options: [
			{
				name: 'Criar',
				value: 'create',
				action: 'Criar uma fatura',
				description: 'Criar uma nova fatura',
				routing: {
					request: {
						method: 'POST',
						url: '/invoices',
					},
				},
			},
			{
				name: 'Excluir',
				value: 'delete',
				action: 'Excluir uma fatura',
				description: 'Excluir uma fatura',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
			{
				name: 'Buscar',
				value: 'get',
				action: 'Buscar uma fatura',
				description: 'Buscar uma única fatura pelo ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
			{
				name: 'Listar',
				value: 'getMany',
				action: 'Listar faturas',
				description: 'Obter uma lista de faturas',
				routing: {
					request: {
						method: 'GET',
						url: '/invoices',
					},
				},
			},
			{
				name: 'Buscar Pagamentos',
				value: 'getPayments',
				action: 'Buscar pagamentos da fatura',
				description: 'Buscar todos os pagamentos de uma fatura',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoiceId}}/payments',
					},
				},
			},
			{
				name: 'Registrar Pagamento',
				value: 'recordPayment',
				action: 'Registrar um pagamento',
				description: 'Registrar um pagamento manual para uma fatura',
				routing: {
					request: {
						method: 'POST',
						url: '=/invoices/{{$parameter.invoiceId}}/payments',
					},
				},
			},
			{
				name: 'Atualizar',
				value: 'update',
				action: 'Atualizar uma fatura',
				description: 'Atualizar uma fatura existente',
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
