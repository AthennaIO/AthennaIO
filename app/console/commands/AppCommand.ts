import { BaseCommand } from '@athenna/artisan'
import { AppService } from '#app/services/AppService'

export class AppCommand extends BaseCommand {
  public static signature(): string {
    return 'app'
  }

  public static description(): string {
    return `Get some information's about the application.`
  }

  public async handle(): Promise<void> {
    const appService = ioc.safeUse<AppService>('App/Services/AppService')
    const json = JSON.stringify(appService.findOne(), null, 2)

    this.logger.info(`Application information's: ${json}`)
  }
}
