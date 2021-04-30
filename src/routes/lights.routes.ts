import {Router} from 'express';
import lightsController from "../controllers/lights.controller"


const router = Router();

router.get("/GetLights/get/",lightsController.getLights); //Funciona
router.put('/AddLight', lightsController.newLight); //Funciona
router.post('/EditLight/', lightsController.updateLight); //Funciona
router.get("/GetStateLight/:id",lightsController.getStateLight);
router.post("/EditLights/:id", lightsController.updateAllLights);
router.delete("/DeleteLight/:id", lightsController.deleteLight);
router.post("/ChangeStateLight/:id",lightsController.changeStateLight);
router.post('/ChangeStateAllLights/',lightsController.changeStateAllLights);

export default router;