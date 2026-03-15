"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentDescription = void 0;
const getMany_1 = require("./getMany");
const get_1 = require("./get");
const create_1 = require("./create");
const update_1 = require("./update");
const delete_1 = require("./delete");
const showOnlyForAppointment = {
    resource: ['appointment'],
};
exports.appointmentDescription = [
    {
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAppointment,
        },
        options: [
            {
                name: 'Criar',
                value: 'create',
                action: 'Criar um agendamento',
                description: 'Criar um novo agendamento',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/appointments',
                    },
                },
            },
            {
                name: 'Excluir',
                value: 'delete',
                action: 'Excluir um agendamento',
                description: 'Excluir um agendamento',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/appointments/{{$parameter.appointmentId}}',
                    },
                },
            },
            {
                name: 'Buscar',
                value: 'get',
                action: 'Buscar um agendamento',
                description: 'Buscar um único agendamento pelo ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/appointments/{{$parameter.appointmentId}}',
                    },
                },
            },
            {
                name: 'Listar',
                value: 'getMany',
                action: 'Listar agendamentos',
                description: 'Obter uma lista de agendamentos',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/appointments',
                    },
                },
            },
            {
                name: 'Atualizar',
                value: 'update',
                action: 'Atualizar um agendamento',
                description: 'Atualizar um agendamento existente',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/appointments/{{$parameter.appointmentId}}',
                    },
                },
            },
        ],
        default: 'getMany',
    },
    ...getMany_1.appointmentGetManyDescription,
    ...get_1.appointmentGetDescription,
    ...create_1.appointmentCreateDescription,
    ...update_1.appointmentUpdateDescription,
    ...delete_1.appointmentDeleteDescription,
];
//# sourceMappingURL=index.js.map