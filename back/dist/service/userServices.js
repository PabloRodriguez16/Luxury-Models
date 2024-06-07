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
exports.loginService = exports.createUserService = exports.getUserByIdService = exports.getAllUsersServices = void 0;
var credentialsServices_1 = require("./credentialsServices");
var User_1 = require("../entities/User");
var data_source_1 = require("../config/data-source");
var Credential_1 = require("../entities/Credential");
var userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
var credentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
var getAllUsersServices = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, userRepository.find({ relations: ["appointments"] })];
            case 1:
                users = _a.sent();
                return [2, users];
        }
    });
}); };
exports.getAllUsersServices = getAllUsersServices;
var getUserByIdService = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (userId === null) {
                    throw new Error("ID de usuario no válido");
                }
                return [4, userRepository.findOne({ where: { id: userId }, relations: ["appointments"] })];
            case 1:
                user = _a.sent();
                if (user) {
                    return [2, user];
                }
                else {
                    throw new Error("El usuario no existe");
                }
                return [2];
        }
    });
}); };
exports.getUserByIdService = getUserByIdService;
var createUserService = function (user, credentialsUser) { return __awaiter(void 0, void 0, void 0, function () {
    var name, email, birth_date, nDni, userName, userPassword, userIsRepeated, credential, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = user.name, email = user.email, birth_date = user.birth_date, nDni = user.nDni;
                userName = credentialsUser.userName, userPassword = credentialsUser.userPassword;
                return [4, credentialRepository.findOne({ where: { username: userName } })];
            case 1:
                userIsRepeated = _a.sent();
                if (userIsRepeated)
                    throw new Error("El usuario ya existe");
                return [4, (0, credentialsServices_1.createCredentials)({ userName: userName, userPassword: userPassword })];
            case 2:
                credential = _a.sent();
                newUser = userRepository.create({
                    name: name,
                    email: email,
                    birth_date: birth_date,
                    nDni: nDni,
                    credential: { id: credential },
                });
                return [4, userRepository.save(newUser)];
            case 3:
                _a.sent();
                return [2, newUser];
        }
    });
}); };
exports.createUserService = createUserService;
var loginService = function (userName, userPassword) { return __awaiter(void 0, void 0, void 0, function () {
    var foundedCredential, foundUser, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4, credentialRepository.findOne({ where: { username: userName, password: userPassword } })];
            case 1:
                foundedCredential = _a.sent();
                if (!foundedCredential) return [3, 3];
                return [4, userRepository.findOne({
                        where: {
                            credential: foundedCredential
                        }
                    })];
            case 2:
                foundUser = _a.sent();
                if (foundUser) {
                    return [2, { login: true, foundUser: foundUser }];
                }
                else {
                    throw new Error("El usuario correspondiente a estas credenciales no existe.");
                }
                return [3, 4];
            case 3: throw new Error("Credenciales inválidas. El usuario no está registrado.");
            case 4: return [3, 6];
            case 5:
                error_1 = _a.sent();
                throw new Error("Error al intentar iniciar sesión: " + error_1);
            case 6: return [2];
        }
    });
}); };
exports.loginService = loginService;
