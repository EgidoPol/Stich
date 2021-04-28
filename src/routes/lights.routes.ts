import {Router} from 'express';
import lightsController from "../controllers/light.controller"


const router = Router();

router.get('/GetLights/:id',lightsController.getLights);
router.put('/AddLight', lightsController.newLight);
router.post('/EditLight/', lightsController.updateLight);
router.post('/EditLights/:id', lightsController.updateLights);
router.delete('/DeleteLight/:id', lightsController.deleteLight);

export default router;