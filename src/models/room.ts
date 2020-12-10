import mongoose, { Schema, Document} from 'mongoose';
import Light, { ILight } from './light';
//Modelo de objeto que se guarda en la BBDD de MongoDB
const roomSchema = new Schema({
    name:{
        type: String
    },
    lights:{
        type: Schema.Types.ObjectId,
        ref: Light
    }
  
});

//Interfaz para tratar respuesta como documento
export interface IRoom extends Document {
    name: string;
    lights: ILight['_id'];
}

//Exportamos modelo para poder usarlo 
//Mongoose#model(name, [schema], [collectionName], [skipInit])
export default mongoose.model<IRoom>('Room', roomSchema,'rooms');