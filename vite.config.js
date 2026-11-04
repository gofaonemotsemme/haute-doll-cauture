import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   base: '/haute-doll-cauture',
  
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore the harmless "use client" directive warnings from lucide-react
        if (
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes('"use client"')
        ) {
          return
        }
        // Let all other warnings through as normal
        warn(warning)
      },
    },
  },
})
