import {Router} from 'express';
import {sendPrayer} from '../controllers/prayer'
const router = Router();

router.get('/sendPrayer/:nom/:mess', sendPrayer);


export default router;