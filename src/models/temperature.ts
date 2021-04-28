import mongoose, { Schema, Document} from 'mongoose';
//Modelo de objeto que se guarda en la BBDD de MongoDB
const temperatureSchema = new Schema({
    humidity:{
        type: Number
    },
    temperature:{
        type: Number
    }
});
//Interfaz para tratar respuesta como documento
export interface ITemperature extends Document {
    humidity: number;
    temperture: number;
}

//Exportamos modelo para poder usarlo 
//Mongoose#model(name, [schema], [collectionName], [skipInit])
export default mongoose.model<ITemperature>('Temperature', temperatureSchema,'temperature');
