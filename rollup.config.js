const common = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const dts = require('rollup-plugin-dts');
const typescript = require('@rollup/plugin-typescript');
// const { visualizer } = require('rollup-plugin-visualizer');

const fs = require('fs');
const path = require('path');

// Function to recursively get all files in a directory
function getFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fileList = [];
  files.forEach((file) => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      fileList = fileList.concat(getFiles(filePath));
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Get all JavaScript files in the 'src' directory
const files = getFiles('src').filter(
  (file) => file.endsWith('.tsx') || file.endsWith('.ts'),
);

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
// Generate Rollup configurations dynamically
const rollupConfigs = files.map((file) => ({
  input: file,
  output: {
    file: `dist/${path.basename(file)}`, // Output to 'dist' directory with the same name
    format: 'es', // or 'cjs', 'umd', 'amd', 'iife',
    sourcemap: true,
  },
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
    typescript({ tsconfig: './tsconfig.json' }),
  ],
}));

module.exports = rollupConfigs.concat([]);
