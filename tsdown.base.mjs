import {defineConfig} from 'tsdown'

export const baseConfig = defineConfig({
    format: ['esm', 'cjs'],
    clean: true,
    sourcemap: true,
    minify: false,
    css: true,
    target: 'es2020',
    platform: 'neutral',
    dts: {
        eager: true
    }
})