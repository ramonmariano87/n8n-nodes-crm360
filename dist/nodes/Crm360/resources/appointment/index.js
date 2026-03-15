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
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAppointment,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create an appointment',
                description: 'Create a new appointment',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/appointments',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete an appointment',
                description: 'Delete an appointment',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/appointments/{{$parameter.appointmentId}}',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get an appointment',
                description: 'Get a single appointment by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/appointments/{{$parameter.appointmentId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getMany',
                action: 'Get many appointments',
                description: 'Get a list of appointments',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/appointments',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update an appointment',
                description: 'Update an existing appointment',
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