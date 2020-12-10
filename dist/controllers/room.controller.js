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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = __importDefault(require("../models/room"));
const getRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield room_1.default.find({}).populate('lights');
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(404).json(err);
    }
});
const newRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const room = new room_1.default({
        "name": req.body.name,
        "lights": req.body.lights
    });
    room.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
});
function updateRoom(req, res) {
    const id = req.body._id;
    const name = req.body.name;
    const lights = req.body.lights;
    room_1.default.update({ "_id": id }, { $set: { "name": name, "lights": lights } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteRoom(req, res) {
    room_1.default.deleteOne({ "_id": req.params._id }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getRooms, newRoom, updateRoom, deleteRoom };
