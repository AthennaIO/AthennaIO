import { ContextContract } from '@athenna/http'
import { WelcomeServiceContract } from 'app/Contracts/WelcomeServiceContract'

export class WelcomeController {
  private welcomeService: WelcomeServiceContract

  /**
   * Use the constructor to resolve any dependency of the Ioc container
   *
   * @param container
   * @type {(container: any) => WelcomeController}
   */
  constructor(container) {
    this.welcomeService = container.welcomeService
  }

  /**
   * Intercept method is executed before the response has been sent
   *
   * @param ctx
   * @type {(ctx: ContextContract) => Promise<any>}
   */
  async show({ response }: ContextContract) {
    const data = await this.welcomeService.findOne()

    return response.status(200).send(data)
  }
}
