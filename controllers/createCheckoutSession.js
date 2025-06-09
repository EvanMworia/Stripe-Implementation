import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const stripe = Stripe(process.env.SK_TEST);
async function proceedToCheckout(req, res) {
	try {
		const { price } = req.body;
	} catch (error) {
		console.error('error looks like', error);
	}
}
