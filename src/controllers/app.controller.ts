import { Inject } from '@athenna/ioc'
import { Context, Controller } from '@athenna/http'
import { AppService } from '#src/services/app.service'

@Controller()
export class AppController {
  @Inject()
  private readonly appService: AppService

  public async show({ response }: Context) {
    const data = this.appService.findOne()

    return response.status(200).send(data)
  }
}
