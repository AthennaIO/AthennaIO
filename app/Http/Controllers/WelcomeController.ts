import { Context, Controller } from '@athenna/http'
import { WelcomeService } from '#app/Services/WelcomeService'

@Controller()
export class WelcomeController {
  private welcomeService: WelcomeService

  public constructor(welcomeService: WelcomeService) {
    this.welcomeService = welcomeService
  }

  public async show({ response }: Context) {
    const data = await this.welcomeService.findOne()

    return response.status(200).send(data)
  }
}
