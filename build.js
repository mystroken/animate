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
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  external: [],
})
