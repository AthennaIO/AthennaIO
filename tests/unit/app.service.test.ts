import { Test, type Context } from '@athenna/test'
import { AppService } from '#src/services/app.service'

export default class AppServiceTest {
  @Test()
  public async shouldReturnThePayloadFromHelloMethod({ assert }: Context) {
    const appService = new AppService()

    assert.deepEqual(appService.findOne(), {
      name: '@athenna/athenna',
      domain: null,
      version: '1.0.0',
      description: 'Athenna is awesome!',
      source: 'https://github.com/AthennaIO'
    })
  }
}
