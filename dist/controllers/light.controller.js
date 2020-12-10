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
const light_1 = __importDefault(require("../models/light"));
const getLights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield light_1.default.find({} /*{"room": {"_id": req.params._id}}*/);
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(404).json(err);
    }
});
const newLight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const light = new light_1.default({
        "colorR": req.body.colorR,
        "colorB": req.body.colorB,
        "colorG": req.body.colorG,
        "intensity": req.body.intensity
    });
    light.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
});
function updateLight(req, res) {
    const id = req.body._id;
    const colorR = req.body.colorR;
    const colorB = req.body.colorB;
    const colorG = req.body.colorG;
    const intensity = req.body.intensity;
    light_1.default.update({ "_id": id }, { $set: { "colorR": colorR, "colorB": colorB, "colorG": colorG,
            "intensity": intensity } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteLight(req, res) {
    light_1.default.deleteOne({ "_id": req.params._id }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getLights, newLight, updateLight, deleteLight };
