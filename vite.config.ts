import { defineConfig } from 'vite'
import { Path } from '@athenna/common'

import react from '@vitejs/plugin-react'
import athenna from '@athenna/vite/plugins/client'

export default defineConfig({
  resolve: {
    alias: {
      /**
       * Define `#app` import alias path.
       */
      '#app': Path.resources('app')
    }
  },
  plugins: [
    athenna({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['src/resources/app/root.tsx'],

      /**
       * Paths to watch and reload the browser on file change.
       */
      reload: ['src/resources/views/**/*.edge', 'src/resources/app/**/*']
    }),
    react()
  ]
})
