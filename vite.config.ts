import { defineConfig } from 'vite'

import athenna from '@athenna/vite/plugins/client'

export default defineConfig({
  plugins: [
    athenna({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['src/resources/css/app.scss', 'src/resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change.
       */
      reload: ['src/resources/views/**/*.edge']
    })
  ]
})
