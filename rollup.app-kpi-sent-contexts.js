import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

export default {
  external: [
    'react',
    'react-proptypes',
    'react-dom',
    'recharts',
    'styled-components',
  ],
  input: "src/AppKpiSentContexts.js",
  output: {
    file: "public/bundle-kpi-sent-contexts.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    image(),
    postcss({
      extensions: [".css"],
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs()
  ]
};
