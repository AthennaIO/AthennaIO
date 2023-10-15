import { Test, type Context } from '@athenna/test'
import { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'

export default class AppCommandTest extends BaseConsoleTest {
  @Test()
  public async shouldBeAbleToGetTheStdoutOfAppCommand({ command }: Context) {
    const output = await command.run('app')

    output.assertSucceeded()
    output.assertLogged("Application information's:")
    output.assertLogged('@athenna/athenna')
    output.assertLogged('Athenna is awesome!')
  }
}
