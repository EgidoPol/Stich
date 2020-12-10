"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Main Execution File of the Server
const app_1 = __importDefault(require("./app")); //Exported App importing here
//Execute Connection to BDD before launching the Server
require("./database");
app_1.default.listen(app_1.default.get('port')); //Recovering Port from app.ts
console.log('Server on PortNumber: ', app_1.default.get('port'));
