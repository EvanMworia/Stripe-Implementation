import ex from 'express';
import { proceedToCheckout } from '../controllers/createCheckoutSession.js';

const route = ex.Router();

route.post('/checkout', proceedToCheckout);

export default route;
