import { Inject } from '@athenna/ioc'
import { AppService } from '#src/services/app.service'
import { Controller, type Context } from '@athenna/http'

@Controller()
export class AppController {
  @Inject()
  private readonly appService: AppService

  public async show({ response }: Context) {
    const data = this.appService.findOne()

    return response.status(200).send(data)
  }
}
