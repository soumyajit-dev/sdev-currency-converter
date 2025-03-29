declare module 'sdev-currency-converter' {
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
	export function convertCurrency(fromCurrency: string, toCurrency: string, units: number): Promise<number>;
}
