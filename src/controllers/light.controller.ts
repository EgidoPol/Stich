import {Request, Response} from 'express';
import Light from '../models/light';
import Room from '../models/room';

const getLights = async (req: Request, res: Response) => {
    try{
        const results = await Light.find({"room": {"_id": req.params._id}});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const newLight = async (req: Request, res: Response) => {
    const light = new Light({
        "colorR": req.body.colorR,
        "colorB": req.body.colorB,
        "colorG": req.body.colorG,
        "intensity": req.body.intensity
    });
    light.save().then((data) => {
        
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
function updateLight (req: Request, res: Response){
    const id: string = req.body._id;
    const colorR: number = req.body.colorR;
    const colorB: number = req.body.colorB;
    const colorG: number = req.body.colorG;
    const intensity: number = req.body.intensity;

    Light.update({"_id": id}, {$set: {"colorR": colorR, "colorB": colorB, "colorG": colorG, 
                              "intensity": intensity}}).then((data: any) => {
        res.status(201).json(data);
    }).catch((err: any) => {
        res.status(500).json(err);
    })
}
function deleteLight (req:Request,res:Response){
    Light.deleteOne({"_id":req.params._id}).then((data: any) => {
        res.status(200).json(data);
    }).catch((err: any) => {
        res.status(500).json(err);
    })
}
const updateLights = async (req:Request, res: Response) => {
    try{
        const roomOfInterest = await Room.find({"room": {"_id": req.params.roomid}});
        const colorR: number = req.body.colorR;
        const colorB: number = req.body.colorB;
        const colorG: number = req.body.colorG;
        const intensity: number = req.body.intensity;
        roomOfInterest.forEach(Light => {
            const id: string = Light.id;
            Light.updateOne({"_id": id}, {$set: {"colorR": colorR, "colorB": colorB, "colorG": colorG, 
                                    "intensity": intensity}})
        });
        return res.status(200).json(res);
    } catch (err) {
        return res.status(404).json(err);
    }
}
export default {getLights,newLight, updateLight, deleteLight, updateLights};