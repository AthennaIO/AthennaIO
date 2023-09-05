import { Test, type Context } from '@athenna/test'
import { BaseCliTest } from '@athenna/core/testing/BaseCliTest'

export default class AppCommandTest extends BaseCliTest {
  @Test()
  public async shouldBeAbleToGetTheStdoutOfAppCommand({ command }: Context) {
    const output = await command.run('app')

    output.assertSucceeded()
    output.assertLogged(`Application information's:`)
    output.assertLogged('@athenna/athenna')
    output.assertLogged('Athenna is awesome!')
  }
}
