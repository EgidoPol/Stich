"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos dependencias
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
//Importamos fichero de rutas
const lights_routes_1 = __importDefault(require("./routes/lights.routes"));
const rooms_routes_1 = __importDefault(require("./routes/rooms.routes"));
//Inicializamos express
const app = express_1.default();
//Configuración
//Cuando haya variable de entorno sera PORT y sino 3000
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
//Changes
//API Routes
app.use('/lights', lights_routes_1.default);
app.use('/rooms', rooms_routes_1.default);
//Exportamos fichero como 'app'
exports.default = app;
