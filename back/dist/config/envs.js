"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./src/config/.env"
});
var PORT = process.env.PORT;
exports.PORT = PORT;
var DB_HOST = process.env.DB_HOST;
exports.DB_HOST = DB_HOST;
var DB_PORT = Number(process.env.DB_PORT);
exports.DB_PORT = DB_PORT;
var DB_USER = process.env.DB_USER;
exports.DB_USER = DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_PASSWORD = DB_PASSWORD;
var DB_NAME = process.env.DB_NAME;
exports.DB_NAME = DB_NAME;
