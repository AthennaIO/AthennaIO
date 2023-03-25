import { Context, Controller } from '@athenna/http'
import { AppService } from '#app/Services/AppService'

@Controller()
export class AppController {
  private appService: AppService

  public constructor(appService: AppService) {
    this.appService = appService
  }

  public async show({ response }: Context) {
    const data = await this.appService.findOne()

    return response.status(200).send(data)
  }
}
