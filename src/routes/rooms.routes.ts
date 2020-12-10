import {Router} from 'express';
import RoomsController from "../controllers/room.controller"


const router = Router();

router.get('/GetRooms',RoomsController.getRooms);
router.put('/AddRoom', RoomsController.newRoom);
router.post('/EditRoom', RoomsController.updateRoom);
router.delete('/DeleteRoom/:id', RoomsController.deleteRoom);

export default router;