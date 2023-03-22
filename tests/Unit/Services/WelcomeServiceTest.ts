import { Test, BeforeAll, TestContext } from '@athenna/test'
import { WelcomeService } from '#app/Services/WelcomeService'

export default class WelcomeServiceTest {
  @BeforeAll()
  public async beforeAll() {
    await Config.loadAll(Path.config())
  }

  @Test()
  public async shouldReturnTheWelcomePayloadFromFindOneMethod({ assert }: TestContext) {
    const welcomeService = new WelcomeService()

    const { name, version, description, source } = await welcomeService.findOne()

    assert.equal(name, '@athenna/athenna')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(description, 'Athenna is awesome!')
  }
}
