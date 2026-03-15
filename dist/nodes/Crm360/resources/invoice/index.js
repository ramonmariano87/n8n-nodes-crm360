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
    ...getMany_1.invoiceGetManyDescription,
    ...get_1.invoiceGetDescription,
    ...create_1.invoiceCreateDescription,
    ...update_1.invoiceUpdateDescription,
    ...delete_1.invoiceDeleteDescription,
    ...getPayments_1.invoiceGetPaymentsDescription,
    ...recordPayment_1.invoiceRecordPaymentDescription,
];
//# sourceMappingURL=index.js.map