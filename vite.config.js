import { cwd } from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '')

  if (mode === 'production' && !env.VITE_API_URL) {
    throw new Error('VITE_API_URL must be set for production builds.')
  }

  return {
    plugins: [react()],
    base: '/'
  }
})
