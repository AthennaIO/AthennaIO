/**
 * @athenna/core
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { assert } from '@japa/assert'
import { Importer } from '@athenna/test'
import { specReporter } from '@japa/spec-reporter'
import { request } from '@athenna/http/testing/plugins'
import { configure, processCliArgs, run } from '@japa/runner'

/*
|--------------------------------------------------------------------------
| Configure tests
|--------------------------------------------------------------------------
|
| The configure method accepts the configuration to configure the Japa
| tests runner.
|
| The first method call "processCliArgs" process the command line arguments
| and turns them into a config object. Using this method is not mandatory.
|
| Please consult japa.dev/runner-config for the config docs.
*/

configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    files: ['tests/E2E/**/*Test.ts', 'tests/Unit/**/*Test.ts'],
    plugins: [assert(), request()],
    reporters: [specReporter()],
    importer: Importer.import,
    timeout: 10000,
  },
})

/*
|--------------------------------------------------------------------------
| Run tests
|--------------------------------------------------------------------------
|
| The following "run" method is required to execute all the tests.
|
*/

run()
