// yarn build 用到的vite配置

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default {
    plugins: [vue()],
    build: {
        minify: true,
        lib: {
            entry: resolve('./src/index.js'),
            name: 'uicons'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
};