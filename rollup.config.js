const fs = require('fs');
const typescript = require('rollup-plugin-typescript');
const prettier = require('rollup-plugin-prettier');

const filenames = fs
    .readdirSync('./src/')
    .filter((name) => name.endsWith('.ts'));

/** @type {import('rollup').RollupOptions} */
module.exports = filenames.map((name) => ({
    input: `./src/${name}`,
    output: {
        dir: './dist/',
        format: 'esm'
    },
    plugins: [typescript(), prettier()],
    treeshake: false
}));
