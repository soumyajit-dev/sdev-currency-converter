# 🌍 Currency Converter - Simple Real-Time Currency Conversion

Need to convert currency amounts in your Node.js app? This package makes it easy — no complex setup or bloated features. Just a simple function that gives you real-time conversion between currencies using [Freecurrencyapi](https://freecurrencyapi.com/).

## ✅ What You Get

- 🔄 Convert from any currency to another
- ⚡ Real-time exchange rates (via Freecurrencyapi)
- 🔧 Easy setup with a `.env` file
- 🪶 Lightweight and beginner-friendly

## 📦 Install It

```bash
npm install currency-converter-api
```

## 🚀 How to Use It

```js
import { convertCurrency } from 'currency-converter-api';

const amount = await convertCurrency('USD', 'INR', 3);
console.log(`Converted amount: ₹${amount}`);
```

## 🔍 Function Details

```ts
convertCurrency(fromCurrency: string, toCurrency: string, units: number): Promise<number>
```

**Arguments:**

- `fromCurrency`: Currency you're converting from (e.g. "USD")
- `toCurrency`: Currency you're converting to (e.g. "EUR")
- `units`: The number of units to convert

**Returns:** A `Promise<number>` with the converted amount.

## 🧪 Example

```js
const result = await convertCurrency('EUR', 'JPY', 50);
console.log(`Converted: ¥${result}`);
```

## 📋 Requirements

- Node.js v14 or higher

## 📝 License

Apache License 2.0,
