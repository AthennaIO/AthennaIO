import { Path } from '@secjs/utils'
import { Test } from '@athenna/test'
import { Config } from '@athenna/config'
import { WelcomeService } from '#app/Services/WelcomeService'

export class WelcomeServiceTest extends Test {
  /**
   * Before all event. This method is executed
   * before all tests.
   *
   * @return {void | Promise<void>}
   */
  async beforeAll() {
    await Config.load(Path.config())
  }

  /**
   * Run your test.
   *
   * @param {import('@athenna/test').UnitTestContext} ctx
   */
  async shouldReturnConcreteWelcomePayloadFromService({ assert }) {
    const welcomeService = new WelcomeService()

    const { name, version, description, source } = await welcomeService.findOne()

    assert.equal(name, '@athenna/scaffold')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(
      description,
      "The Athenna scaffold project used by 'athenna new project' command to create your project.",
    )
  }
}
