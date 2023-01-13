import { Test } from '@athenna/test'
import { Path } from '@athenna/common'
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
    await Config.loadAll(Path.config())
  }

  /**
   * Run your test.
   *
   * @param {import('@athenna/test').UnitTestContext} ctx
   */
  async shouldReturnConcreteWelcomePayloadFromService({ assert }) {
    const welcomeService = new WelcomeService()

    const { name, version, description, source } = await welcomeService.findOne()

    assert.equal(name, '@athenna/athenna')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(description, 'Athenna is awesome!')
  }
}
