import { BaseCommand, CommandSettings } from '@athenna/artisan'

export class AppCommand extends BaseCommand {
  public static settings(): CommandSettings {
    return {
      loadApp: true,
    }
  }

  public static signature(): string {
    return 'app'
  }

  public static description(): string {
    return 'Get some informations about the application.'
  }

  public async handle(): Promise<void> {
    const appService = ioc.safeUse('App/Services/AppService')
    const json = JSON.stringify(appService.findOne(), null, 2)

    this.logger.info(`Application informations: ${json}`)
  }
}
