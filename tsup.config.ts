import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/node/index.ts'],
  format: ['cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true
})
