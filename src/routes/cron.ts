import { Cron } from '@athenna/cron'
import { Log } from '@athenna/logger'

Cron.schedule()
  .pattern('* * * * *')
  .handler(ctx => {
    Log.info(`running ${ctx.pattern} route scheduler`)
  })
