import {Request, Response} from 'express';
import Room from '../models/room';
import Light from '../models/light';

const getRooms = async (req: Request, res: Response) => {
    try{
        const results = await Room.find({}/*{"room": {"_id": req.params._id}}*/);
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const newRoom = async (req: Request, res: Response) => {
    const room = new Room({
    
        "name": req.body.name,
        "lights": req.body.lights
    });
    room.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
function updateRoom (req: Request, res: Response){
    const id: string = req.body._id;
    const name: string = req.body.name;
    const lights: string = req.body.lights;
    
    Room.update({"_id": id}, {$set: {"name": name, "lights": lights}}).then((data: any) => {
        res.status(201).json(data);
    }).catch((err: any) => {
        res.status(500).json(err);
    })
}
function deleteRoom (req:Request,res:Response){
    Room.deleteOne({"_id":req.params._id}).then((data: any) => {
        res.status(200).json(data);
    }).catch((err: any) => {
        res.status(500).json(err);
    })
}
export default {getRooms,newRoom, updateRoom, deleteRoom};