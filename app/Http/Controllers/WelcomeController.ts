import { ContextContract } from '@athenna/http'
import { Container } from 'providers/Container'
import { WelcomeServiceContract } from 'app/Contracts/WelcomeServiceContract'

export class WelcomeController {
  private welcomeService: WelcomeServiceContract

  /**
   * Use the constructor to resolve any dependency of the Ioc container
   *
   * @param container
   * @return WelcomeController
   */
  constructor(container: Container) {
    this.welcomeService = container.welcomeService
  }

  /**
   * Intercept method is executed before the response has been sent
   *
   * @param ctx
   * @return Promise<any>
   */
  async show({ response }: ContextContract) {
    const data = await this.welcomeService.findOne()

    return response.status(200).send(data)
  }
}
