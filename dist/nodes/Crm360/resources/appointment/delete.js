"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentDeleteDescription = void 0;
const show = {
    operation: ['delete'],
    resource: ['appointment'],
};
exports.appointmentDeleteDescription = [
    {
        displayName: 'Appointment ID',
        name: 'appointmentId',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show },
        description: 'The ID of the appointment to delete',
    },
];
//# sourceMappingURL=delete.js.map