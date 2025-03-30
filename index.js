const currencyCode = require('./countryCode').CURRENCYCODE;
require('dotenv').config();

let currencyFrom = '';
let currencyTo = '';
let currencyAmount = 0;

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
exports.convertCurrency = async function (fromCurrency, toCurrency, units) {
	if (fromCurrency !== undefined) from(fromCurrency);
	if (toCurrency !== undefined) to(toCurrency);
	if (units !== undefined) amount(units);

	try {
		const result = await getRates();
		const rate = result.conversion_rates[currencyTo];
		const converted = (currencyAmount * rate).toFixed(2);

		return converted;
	} catch (err) {
		throw new Error('Failed to convert currency');
	}
};

async function getRates() {
	const API_KEY = process.env.FREECURRENCYAPI;
	const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

	try {
		const response = await fetch(`${BASE_URL}/${currencyFrom}`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	} catch (err) {
		throw new Error('Currency conversion API is not working');
	}
}

function from(from) {
	if (typeof from !== 'string') throw new TypeError('currency code should be a string');

	if (!currencyCode.includes(from.toUpperCase())) throw new Error(`${from} is not a valid currency code`);

	currencyFrom = from.toUpperCase();
}

function to(to) {
	if (typeof to !== 'string') throw new TypeError('currency code should be a string');

	if (!currencyCode.includes(to.toUpperCase())) throw new Error(`${to} is not a valid currency code`);

	currencyTo = to.toUpperCase();
}

function amount(amount) {
	if (typeof amount !== 'number') throw new TypeError('amount should be a number');

	if (amount <= 0) throw new Error('amount should be a positive number');

	currencyAmount = amount;
}
