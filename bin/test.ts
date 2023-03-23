import { assert } from '@japa/assert'
import { Importer } from '@athenna/test'
import { specReporter } from '@japa/spec-reporter'
import { request } from '@athenna/http/testing/plugins'
import { configure, processCliArgs, run } from '@japa/runner'

configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    files: ['tests/unit/**/*.test.ts', 'tests/e2e/**/*.test.ts'],
    plugins: [assert(), request()],
    reporters: [specReporter()],
    importer: Importer.import,
    timeout: 10000,
  },
})

run()
