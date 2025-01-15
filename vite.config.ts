import { defineConfig } from 'vite'
import { Path } from '@athenna/common'

import react from '@vitejs/plugin-react'
import athenna from '@athenna/vite/plugins/client'

export default defineConfig({
  build: {
    lib: {
      name: 'jao',
      entry: Path.resources('app/app.tsx'),
      fileName: (ext, fileName) => {
        return `${fileName}.${ext}`
      },
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      input: Path.resources('app/app.tsx'),
      output: { preserveModules: true }
    }
  },
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
      buildDirectory: 'src/resources/build',
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: [],

      /**
       * Paths to watch and reload the browser on file change.
       */
      reload: ['src/resources/views/**/*.edge', 'src/resources/app/**/*']
    }),
    react()
  ]
})
