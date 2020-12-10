import {Router} from 'express';
import lightsController from "../controllers/light.controller"


const router = Router();

router.get('/GetLights',lightsController.getLights);
router.put('/AddLight', lightsController.newLight);
router.post('/EditLight', lightsController.updateLight);
router.delete('/DeleteLight/:id', lightsController.deleteLight);

export default router;