import { Runner } from '@athenna/test'
import { scheduler } from '@athenna/cron/testing/plugins'
import { command } from '@athenna/artisan/testing/plugins'

await Runner.setTsEnv()
  .addAssertPlugin()
  .addPlugin(command())
  .addPlugin(scheduler())
  .addPath('tests/e2e/**/*.ts')
  .addPath('tests/unit/**/*.ts')
  .setCliArgs(process.argv.slice(2))
  .setGlobalTimeout(5000)
  .setForceExit()
  .run()
