const { build } = require('esbuild')
const glob = require('glob')
const entryPoints = glob.sync('./src/**/*.ts')

build({
  entryPoints,
  outbase: './src',
  outdir: './dist' ,
  platform: 'browser',
  target: ["es2016"],
  external: [],
  watch: false,
})
