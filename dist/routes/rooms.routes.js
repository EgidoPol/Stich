"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = __importDefault(require("../controllers/room.controller"));
const router = express_1.Router();
router.get('/GetRooms', room_controller_1.default.getRooms);
router.put('/AddRoom', room_controller_1.default.newRoom);
router.post('/EditRoom', room_controller_1.default.updateRoom);
router.delete('/DeleteRoom/:id', room_controller_1.default.deleteRoom);
exports.default = router;
