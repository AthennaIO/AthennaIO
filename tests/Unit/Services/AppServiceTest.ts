import { Test, BeforeAll, TestContext } from '@athenna/test'
import { AppService } from '#app/Services/AppService'

export default class AppServiceTest {
  @BeforeAll()
  public async beforeAll() {
    await Config.loadAll(Path.config())
  }

  @Test()
  public async shouldReturnThePayloadFromFindOneMethod({ assert }: TestContext) {
    const appService = new AppService()

    const { name, version, description, source } = await appService.findOne()

    assert.equal(name, '@athenna/athenna')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(description, 'Athenna is awesome!')
  }
}
