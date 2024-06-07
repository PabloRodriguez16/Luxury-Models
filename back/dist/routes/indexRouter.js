"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter_1 = __importDefault(require("./userRouter"));
var turnsRouter_1 = __importDefault(require("./turnsRouter"));
var router = (0, express_1.Router)();
router.use("/users", userRouter_1.default);
router.use("/appointments", turnsRouter_1.default);
exports.default = router;
