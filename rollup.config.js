const common = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const dts = require('rollup-plugin-dts');
const typescript = require('@rollup/plugin-typescript');
// const { visualizer } = require('rollup-plugin-visualizer');

const external = [
  'react',
  'react-dom',
  'next',
  'next/link',
  'next/navigation',
  'graphql',
  '@apollo/client',
  '@apollo/client/link/context',
  '@babel/runtime',
];

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve.default({
        browser: true,
        resolveOnly: (module) => {
          return !Boolean(
            external.filter((d) => {
              return d.indexOf(module) === 0;
            }).length,
          );
        },
      }),
      common.default(),
      typescript({ tsconfig: './tsconfig.json' }),
      // visualizer(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];
