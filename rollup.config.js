import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'dist/src/index.js',
  output: [
    {
      file: 'dist/webaudio.js',
      format: 'iife',
      name: 'WebAudio'
    },
    {
      file: 'dist/webaudio.min.js',
      format: 'iife',
      name: 'WebAudio',
      plugins: [terser()]
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
}
