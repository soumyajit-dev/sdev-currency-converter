declare module 'sdev-currency-converter' {
	export function convertCurrency(fromCurrency: string, toCurrency: string, units: number): Promise<number>;
}
