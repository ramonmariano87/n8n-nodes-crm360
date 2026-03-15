import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { contactDescription } from './resources/contact';
import { conversationDescription } from './resources/conversation';
import { messageDescription } from './resources/message';
import { webhookDescription } from './resources/webhook';
import { invoiceDescription } from './resources/invoice';
import { proposalDescription } from './resources/proposal';
import { appointmentDescription } from './resources/appointment';
import { productDescription } from './resources/product';

export class Crm360 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CRM 360',
		name: 'crm360',
		icon: 'file:../../icons/crm360.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interaja com a API do CRM 360',
		defaults: {
			name: 'CRM 360',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crm360Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.baseUrl?.replace(/\\/$/, "")}}/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Agendamento',
						value: 'appointment',
					},
					{
						name: 'Contato',
						value: 'contact',
					},
					{
						name: 'Conversa',
						value: 'conversation',
					},
					{
						name: 'Fatura',
						value: 'invoice',
					},
					{
						name: 'Mensagem',
						value: 'message',
					},
					{
						name: 'Produto',
						value: 'product',
					},
					{
						name: 'Proposta',
						value: 'proposal',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
				],
				default: 'contact',
			},
			...contactDescription,
			...conversationDescription,
			...messageDescription,
			...webhookDescription,
			...invoiceDescription,
			...proposalDescription,
			...appointmentDescription,
			...productDescription,
		],
	};
}
