"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crm360Api = void 0;
class Crm360Api {
    constructor() {
        this.name = 'crm360Api';
        this.displayName = 'CRM 360 API';
        this.icon = 'file:../icons/crm360.svg';
        this.documentationUrl = 'https://docs.contrate360.com/api';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials?.apiToken}}',
                    Accept: 'application/json',
                },
            },
        };
        this.test = {
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
}
exports.Crm360Api = Crm360Api;
//# sourceMappingURL=Crm360Api.credentials.js.map