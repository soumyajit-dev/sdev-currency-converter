import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

import dotenv from 'dotenv';
dotenv.config();

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), terser()],
	},
	{
		input: 'src/index.ts',
		output: [{ file: packageJson.types }],
		plugins: [dts.default()],
	},
];
