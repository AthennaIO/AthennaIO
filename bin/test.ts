/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { command } from '@athenna/artisan/testing/plugins'
import { Runner, assert, specReporter } from '@athenna/test'

await Runner.setTsEnv()
  .addPlugin(assert())
  .addPlugin(command())
  .addReporter(specReporter())
  .addPath('tests/unit/**/*.ts')
  .setCliArgs(process.argv.slice(2))
  .setGlobalTimeout(60000)
  .run()
