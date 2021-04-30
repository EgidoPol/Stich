import {Router} from 'express';
import RoomsController from "../controllers/room.controller"


const router = Router();

router.get('/GetRooms',RoomsController.getRooms); //funciona
router.put('/AddRoom', RoomsController.newRoom);//funciona
router.post('/EditRoom', RoomsController.updateRoom);//funciona
router.delete("/DeleteRoom/:id", RoomsController.deleteRoom);

export default router;