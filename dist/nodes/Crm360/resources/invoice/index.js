"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const getPayments_1 = require("./getPayments");
const recordPayment_1 = require("./recordPayment");
const showOnlyForInvoice = {
    resource: ['invoice'],
};
exports.invoiceDescription = [
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
    ...getMany_1.invoiceGetManyDescription,
    ...get_1.invoiceGetDescription,
    ...create_1.invoiceCreateDescription,
    ...update_1.invoiceUpdateDescription,
    ...delete_1.invoiceDeleteDescription,
    ...getPayments_1.invoiceGetPaymentsDescription,
    ...recordPayment_1.invoiceRecordPaymentDescription,
];
//# sourceMappingURL=index.js.map