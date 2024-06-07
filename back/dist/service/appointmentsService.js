"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiredAppointmentService = exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentById = exports.getAllAppointmentsService = void 0;
var data_source_1 = require("../config/data-source");
var Appointment_1 = require("../entities/Appointment");
var User_1 = require("../entities/User");
var AppointmentModel = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment);
var userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
var getAllAppointmentsService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allAppointments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, AppointmentModel.find()];
            case 1:
                allAppointments = _a.sent();
                return [2, allAppointments];
        }
    });
}); };
exports.getAllAppointmentsService = getAllAppointmentsService;
var getAppointmentById = function (appointmentId) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, AppointmentModel.findOne({ where: { id: appointmentId } })];
            case 1:
                appointment = _a.sent();
                if (appointment)
                    return [2, appointment];
                return [2];
        }
    });
}); };
exports.getAppointmentById = getAppointmentById;
var createAppointmentService = function (appointment, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var date, time, service, status, user, newAppointment, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = appointment.date, time = appointment.time, service = appointment.service;
                status = "Active";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4, userRepository.findOne({ where: { id: userId } })];
            case 2:
                user = _a.sent();
                if (!user) {
                    throw new Error("No se encontr\u00F3 ning\u00FAn usuario con el ID: ".concat(userId));
                }
                newAppointment = AppointmentModel.create({
                    date: date,
                    time: time,
                    status: status,
                    service: service,
                    user: user
                });
                return [4, AppointmentModel.save(newAppointment)];
            case 3:
                _a.sent();
                return [2, newAppointment];
            case 4:
                error_1 = _a.sent();
                throw new Error("Error al crear la cita: ".concat(error_1));
            case 5: return [2];
        }
    });
}); };
exports.createAppointmentService = createAppointmentService;
var cancelAppointmentService = function (appointmentId) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, AppointmentModel.findOne({ where: { id: appointmentId } })];
            case 1:
                appointment = _a.sent();
                if (!appointment) return [3, 3];
                appointment.status = "Cancelled";
                return [4, AppointmentModel.save(appointment)];
            case 2:
                _a.sent();
                return [2, appointment];
            case 3: throw new Error("Hubo un error en el service de cancelAppointment");
        }
    });
}); };
exports.cancelAppointmentService = cancelAppointmentService;
var expiredAppointmentService = function (appointmentId) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, AppointmentModel.findOne({ where: { id: appointmentId } })];
            case 1:
                appointment = _a.sent();
                if (!appointment) return [3, 3];
                appointment.status = "Expired";
                return [4, AppointmentModel.save(appointment)];
            case 2:
                _a.sent();
                return [2, appointment];
            case 3: throw new Error("Hubo un error en el service de expiredAppointment");
        }
    });
}); };
exports.expiredAppointmentService = expiredAppointmentService;
