import fs from 'fs';
import typescript from 'rollup-plugin-typescript';
import prettier from 'rollup-plugin-prettier';

const filenames = fs
    .readdirSync('./src/')
    .filter((name) => name.endsWith('.ts'));

export default filenames.map(
    (name) => /** @type {import('rollup').RollupOptions} */ ({
        input: `./src/${name}`,
        output: {
            dir: './dist/',
            format: 'esm'
        },
        plugins: [typescript(), prettier()],
        treeshake: false
    })
);
