"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentGetDescription = void 0;
const show = {
    operation: ['get'],
    resource: ['appointment'],
};
exports.appointmentGetDescription = [
    {
        displayName: 'Appointment ID',
        name: 'appointmentId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the appointment to retrieve',
    },
];
//# sourceMappingURL=get.js.map