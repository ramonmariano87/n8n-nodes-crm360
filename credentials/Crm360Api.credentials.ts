import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class Crm360Api implements ICredentialType {
	name = 'crm360Api';

	displayName = 'CRM 360 API';

	icon: Icon = 'file:../icons/crm360.svg';

	documentationUrl = 'https://docs.contrate360.com/api';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://seudominio.com',
			description: 'A URL base da sua instalação CRM 360 (sem /api/v1)',
			required: true,
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Token de API gerado em Configurações → API Tokens',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.apiToken}}',
				Accept: 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.baseUrl?.replace(/\\/$/, "")}}/api/v1',
			url: '/contacts',
			method: 'GET',
			qs: {
				per_page: '1',
			},
		},
	};
}
