import Router from "router";
import { registerInstitute,schoolRegister,collegeRegister } from "../controllers/institute.controllers.js";

const router = Router();

router.post('/register', registerInstitute);
router.post('/register/school', schoolRegister);
router.post('/register/college', collegeRegister);

export default router;