import { Context, Controller } from '@athenna/http'
import { AppService } from '#src/services/app.service'

@Controller()
export class AppController {
  private readonly appService: AppService

  public constructor(appService: AppService) {
    this.appService = appService
  }

  public async show({ response }: Context) {
    const data = this.appService.findOne()

    return response.status(200).send(data)
  }
}
