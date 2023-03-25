import { AppService } from '#src/services/app.service'
import { BaseCommand, CommandSettings } from '@athenna/artisan'

export class AppCommand extends BaseCommand {
  public static settings(): CommandSettings {
    return {
      loadApp: true,
    }
  }

  public static signature(): string {
    return 'hello'
  }

  public static description(): string {
    return 'Athenna says hello.'
  }

  public async handle(): Promise<void> {
    const appService = ioc.safeUse<AppService>('App/Services/AppService')

    this.logger.info(appService.hello())
  }
}
