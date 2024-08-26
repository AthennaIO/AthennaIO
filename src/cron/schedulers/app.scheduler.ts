import { Log } from '@athenna/logger'
import { Inject } from '@athenna/ioc'
import { Scheduler, type Context } from '@athenna/cron'
import type { AppService } from '#src/services/app.service'

@Scheduler({ pattern: '* * * * *' })
export class AppScheduler {
  @Inject()
  private readonly appService: AppService

  public async handler(ctx: Context) {
    const appInfo = this.appService.findOne()

    Log.info(`running ${ctx.pattern} class scheduler %o`, appInfo)
  }
}
