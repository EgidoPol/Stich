import mongoose, { Schema, Document} from 'mongoose';
//Modelo de objeto que se guarda en la BBDD de MongoDB
const lightSchema = new Schema({
    colorR:{
        type: Number
    },
    colorB:{
        type: Number
    },
    colorG:{
        type: Number
    },
    intensity:{
        type: Number
    },
    state:{
        type: Number
    }
});

//Interfaz para tratar respuesta como documento
export interface ILight extends Document {
    colorR: number;
    colorB: number;
    colorG: number;
    intensity: number;
    state: number;
}

//Exportamos modelo para poder usarlo 
//Mongoose#model(name, [schema], [collectionName], [skipInit])
export default mongoose.model<ILight>('Light', lightSchema,'lights');
