import { BaseCommand } from '@athenna/artisan'

export class AppCommand extends BaseCommand {
  public static signature(): string {
    return 'app'
  }

  public static description(): string {
    return 'Get some informations about the application.'
  }

  public async handle(): Promise<void> {
    const appService = ioc.safeUse('App/Services/AppService')
    const json = JSON.stringify(await appService.findOne(), null, 2)

    this.logger.info(`Application informations: ${json}`)
  }
}
