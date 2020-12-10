"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const light_controller_1 = __importDefault(require("../controllers/light.controller"));
const router = express_1.Router();
router.get('/GetLights', light_controller_1.default.getLights);
router.put('/AddLight', light_controller_1.default.newLight);
router.post('/EditLight', light_controller_1.default.updateLight);
router.delete('/DeleteLight/:id', light_controller_1.default.deleteLight);
exports.default = router;
