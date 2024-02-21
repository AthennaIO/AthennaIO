import { Runner } from '@athenna/test'
import { request } from '@athenna/http/testing/plugins'
import { command } from '@athenna/artisan/testing/plugins'

await Runner.setTsEnv()
  .addAssertPlugin()
  .addPlugin(request())
  .addPlugin(command())
  .addPath('tests/e2e/**/*.ts')
  .addPath('tests/unit/**/*.ts')
  .setCliArgs(process.argv.slice(2))
  .setGlobalTimeout(5000)
  .run()
