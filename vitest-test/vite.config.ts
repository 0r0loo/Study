import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
// @ts-ignore
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts'],
        testMatch: ['./src/tests/**/*.test.tsx'],
        globals: true
    }
})
