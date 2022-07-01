const { build } = require('esbuild')
const glob = require('glob')
const entryPoints = glob.sync('./src/**/*.ts')
const whenIsProduction = process.env.NODE_ENV === 'production'

build({
  entryPoints,
  outbase: './src',
  outdir: './lib' ,
  bundle: false,
  minify: whenIsProduction,
  watch: !whenIsProduction,
  // target: ['es6'],
  external: [],
})
