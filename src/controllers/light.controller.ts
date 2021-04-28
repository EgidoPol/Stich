import {Request, Response} from 'express';
import Light from '../models/light';
import Room from '../models/room';


const getLights = async (req: Request, res: Response) => {
    try{
        const results = await Light.find({}/*{"room": {"_id": req.params._id}}*/);
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}
const getStateLight=async(req:Request,res:Response)=>{
    try{
        const results = await Light.find({"light": {"_id": req.params._id}}).populate('state');
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
        "intensity": req.body.intensity,
        "state":0
    });
    light.save().then((data) => { 
        Room.findOneAndUpdate({_id: req.params.id}, {"$addToSet": {lights: light!._id}}).exec(function(err, result) {
            console.log("Course Update: ",result);
            if (err) {
                // ...
                return res.status(400).send({message: 'No se ha encontrado la habitacion'});
            } else 
                return res.status(201).json(data);            
            
    }).catch((err) => {
        return res.status(500).json(err);
        })
    });
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
const updateAllLights = async (req:Request, res: Response) => {
    try{
        const roomOfInterest = await Room.find({"room": {"_id": req.params.roomid}});
        const colorR: number = req.body.colorR;
        const colorB: number = req.body.colorB;
        const colorG: number = req.body.colorG;
        const intensity: number = req.body.intensity;
        roomOfInterest.forEach(Light => {
            const id: string = Light.lights.id;
            Light.lights.updateOne({"_id": id}, {$set: {"colorR": colorR, "colorB": colorB, "colorG": colorG, 
                                    "intensity": intensity}})
        });
        return res.status(200).json(res);
    } catch (err) {
        return res.status(404).json(err);
    }
}
function changeStateLight (req: Request, res: Response){
    const id: string = req.body._id;
    const state: number = req.body._state;
    if(state==0){
        Light.update({"_id": id}, {$set: {"state": 1}}).then((data: any) => {
            res.status(201).json(data);
        }).catch((err: any) => {
            res.status(500).json(err);
        })}
    else{
        Light.update({"_id": id}, {$set: {"state": 0}}).then((data: any) => {
            res.status(201).json(data);
        }).catch((err: any) => {
            res.status(500).json(err);
        })
    }
}
const changeStateAllLights = async (req:Request, res: Response) => {
    try{
        const roomOfInterest = await Room.find({"room": {"_id": req.params.roomid}});
        const state: number = req.body.state;
        roomOfInterest.forEach(Light => {
            const id: string = Light.lights.id;
            if(state==0)
                Light.lights.updateOne({"_id": id}, {$set: {"state": 1}})
            else
                Light.lights.updateOne({"_id": id}, {$set: {"state": 0}})
        });
        return res.status(200).json(res);
    } catch (err) {
        return res.status(404).json(err);
    }
}
function deleteLight (req:Request,res:Response){
    Light.deleteOne({"_id":req.params._id}).then((data: any) => {
        res.status(200).json(data);
    }).catch((err: any) => {
        res.status(500).json(err);
    })
}
const goodbyeLights = async (req:Request, res: Response) => {
    try{
        const roomOfInterest = await Room.find({"room": {"_id": req.params.roomid}}).populate('light');
        const state: number = req.body.state;
        roomOfInterest.forEach(Light => {
            const state: number = Light.lights.state;
            if(state==1)
                Light.updateOne({"_id": Light.lights.id}, {$set: {"state": 0}})
        });
        return res.status(200).json(res);
    } catch (err) {
        return res.status(404).json(err);
    }
}

export default {getLights,newLight, updateLight,updateAllLights,changeStateLight,changeStateAllLights, deleteLight,getStateLight,goodbyeLights};