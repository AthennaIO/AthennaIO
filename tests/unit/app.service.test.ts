import { Test, type Context } from '@athenna/test'
import { AppService } from '#src/services/app.service'

export default class AppServiceTest {
  @Test()
  public async shouldReturnThePayloadFromFindOneMethod({ assert }: Context) {
    const appService = new AppService()

    const { name, version, description, source } = appService.findOne()

    assert.equal(name, '@athenna/athenna')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(description, 'Athenna is awesome!')
  }
}
