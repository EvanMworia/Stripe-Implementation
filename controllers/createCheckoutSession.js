import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const stripe = new Stripe(process.env.SK_TEST);
export async function proceedToCheckout(req, res) {
	try {
		//const { price } = req.body;
		const newlyCreatedSession = await stripe.checkout.sessions.create({
			success_url: 'http://127.0.0.1:5500/frontendSuccess.html',
			cancel_url: 'http://127.0.0.1:5500/frontendCancel.html',
			line_items: [
				{
					price_data: {
						currency: 'kes',
						unit_amount: 50000, // this is 500 KES × 100
						product_data: {
							name: 'Parcel Delivery Fee',
						},
					},
					quantity: 3, // 3 items at 500 KES each
				},
			],
			mode: 'payment',
		});
		res.status(200).json({ url: newlyCreatedSession.url });
	} catch (error) {
		console.error('error looks like', error);
	}
}
