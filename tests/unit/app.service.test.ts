import { Test, TestContext } from '@athenna/test'
import { AppService } from '#src/services/app.service'

export default class AppServiceTest {
  @Test()
  public async shouldReturnThePayloadFromHelloMethod({ assert }: TestContext) {
    const appService = new AppService()

    assert.equal(appService.hello(), 'Hello World!')
  }
}
