import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },  
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './app/test-setup.ts',
    coverage: {
      provider: 'v8' 
    },
  },
})
