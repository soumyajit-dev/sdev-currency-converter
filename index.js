import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import dotenv from 'dotenv';

dotenv.config();

const freecurrencyapi = new Freecurrencyapi(process.env.FREECURRENCYAPI);

export async function convertCurrency(fromCurrency, toCurrency, units) {
	const response = await freecurrencyapi.latest({
		base_currency: fromCurrency,
		currencies: toCurrency,
	});

	const multiplier = response.data[toCurrency];
	return multiplier * units;
}

convertCurrency('USD', 'INR', 3);
