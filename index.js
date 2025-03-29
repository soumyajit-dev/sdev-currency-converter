import Freecurrencyapi from '@everapi/freecurrencyapi-js';
// import dotenv from 'dotenv';

// dotenv.config();

function freecurrencyapi() {
	return fca_live_6x1hsOvMHBhP1E81ue5FJ2ZySI0TM4qJxFfonCuJ;
}

const freecurrencyapi = new Freecurrencyapi(freecurrencyapi());

/**
 * Converts a given amount from one currency to another using the latest exchange rates.
 *
 * @async
 * @function
 * @param {string} fromCurrency - The currency code to convert **from** (e.g., "USD").
 * @param {string} toCurrency - The currency code to convert **to** (e.g., "EUR").
 * @param {number} units - The amount in the source currency to convert.
 * @returns {Promise<number>} The converted amount in the target currency.
 */
export async function convertCurrency(fromCurrency, toCurrency, units) {
	const response = await freecurrencyapi.latest({
		base_currency: fromCurrency,
		currencies: toCurrency,
	});

	const multiplier = response.data[toCurrency];
	return multiplier * units;
}
