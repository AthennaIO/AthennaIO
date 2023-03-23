import { AppService } from '#src/services/app.service'
import { Test, BeforeEach, TestContext } from '@athenna/test'

export default class AppServiceTest {
  private appService: AppService

  @BeforeEach()
  public async beforeEach() {
    this.appService = new AppService()
  }

  @Test()
  public async shouldReturnTheHelloPayloadFromHelloMethod({ assert }: TestContext) {
    const hello = this.appService.hello()

    assert.equal(hello, 'Hello World!')
  }
}
