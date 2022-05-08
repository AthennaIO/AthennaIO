/**
 * @athenna/scaffold
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { WelcomeServiceMock } from '#tests/Stubs/WelcomeServiceMock'

import { assert } from '@japa/assert'
import { Ignite } from '@athenna/core'
import { Server } from '@athenna/http'
import { pathToFileURL } from 'node:url'
import { specReporter } from '@japa/spec-reporter'
import { runFailedTests } from '@japa/run-failed-tests'
import { processCliArgs, configure, run, TestContext } from '@japa/runner'

/*
|--------------------------------------------------------------------------
| Set test environment
|--------------------------------------------------------------------------
|
| Set the test environment. This value will remove bootstrap logs and set
| the `.env.${process.env.NODE_ENV}` file as default.
*/

process.env.NODE_ENV = 'test'

/*
|--------------------------------------------------------------------------
| Service container mocking
|--------------------------------------------------------------------------
|
| Reserve this space to set mocks for the service container using the global
| 'ioc' instance. It's important for this code to stay before where we
| ignite the application.
*/

ioc.mock('App/Services/WelcomeService', WelcomeServiceMock)

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
    suites: [
      {
        name: 'Unit',
        files: ['tests/Unit/**/*Test.js'],
        configure(suite) {
          suite.setup(async () => {
            const application = await new Ignite().fire()

            TestContext.macro('request', () => {})
            TestContext.macro('application', application)

            return () => {}
          })
        },
      },
      {
        name: 'E2E',
        files: ['tests/E2E/**/*Test.js'],
        configure(suite) {
          suite.setup(async () => {
            const application = await new Ignite().fire()

            await application.bootHttpServer()

            TestContext.macro('request', Server.request)
            TestContext.macro('application', application)

            return async () => await application.shutdownHttpServer()
          })
        },
      },
    ],
    plugins: [assert(), runFailedTests()],
    reporters: [specReporter()],
    importer: filePath => import(pathToFileURL(filePath).href),
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
