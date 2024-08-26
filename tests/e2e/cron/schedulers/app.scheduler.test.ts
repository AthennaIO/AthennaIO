import { AppService } from '#src/services/app.service'
import { BaseCronTest } from '@athenna/core/testing/BaseCronTest'
import { Mock, Test, type Context, AfterEach } from '@athenna/test'

export default class AppControllerTest extends BaseCronTest {
  @AfterEach()
  public afterEach() {
    Mock.restoreAll()
  }

  @Test()
  public async shouldBeAbleToRunAppScheduler({ scheduler, assert }: Context) {
    Mock.spy(AppService.prototype, 'findOne')

    await scheduler.runByName('AppScheduler')

    assert.calledOnce(AppService.prototype.findOne)
  }
}
