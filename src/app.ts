//Importamos dependencias
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';

//Importamos fichero de rutas
import lightsRoutes from './routes/lights.routes'
import roomsRoutes from './routes/rooms.routes'
//Inicializamos express
const app = express();

//Configuración
//Cuando haya variable de entorno sera PORT y sino 3000
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
//Changes

//API Routes
app.use('/lights', lightsRoutes);
app.use('/rooms', roomsRoutes);
//Exportamos fichero como 'app'
export default app;
