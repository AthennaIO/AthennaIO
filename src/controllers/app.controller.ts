import { Context, Controller } from '@athenna/http'
import { AppService } from '#src/services/app.service'

@Controller()
export class AppController {
  private readonly appService: AppService

  public constructor(appService: AppService) {
    this.appService = appService
  }

  public show({ response }: Context): void {
    response.send({ message: this.appService.hello() })
  }
}
