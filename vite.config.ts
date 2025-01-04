import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import athenna from '@athenna/vite/plugins/client'

export default defineConfig({
  plugins: [
    athenna({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['src/resources/js/app.tsx'],

      /**
       * Paths to watch and reload the browser on file change.
       */
      reload: ['src/resources/views/**/*.edge', 'src/resources/js/**/*.tsx']
    }),
    react()
  ]
})
