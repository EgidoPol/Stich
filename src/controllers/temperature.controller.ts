import {Request, Response} from 'express';
import Temperature from '../models/temperature';


const getTemperature = async (req: Request, res: Response) => {
    try{
        const results = await Temperature.find({"temperature": {"_id": req.params._id}}).populate('temperature');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
};
const getHumidity = async (req: Request, res: Response) => {
    try{
        const results = await Temperature.find({"temperature": {"_id": req.params._id}}).populate('humidity');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
};
export default {getTemperature,getHumidity};
