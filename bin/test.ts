import { request } from '@athenna/http/testing/plugins'
import { Runner, assert, specReporter } from '@athenna/test'

await Runner.setTsEnv()
  .addPlugin(assert())
  .addPlugin(request())
  .addReporter(specReporter())
  .addPath('tests/e2e/**/*.ts')
  .addPath('tests/unit/**/*.ts')
  .setCliArgs(process.argv.slice(2))
  .setGlobalTimeout(5000)
  .run()
