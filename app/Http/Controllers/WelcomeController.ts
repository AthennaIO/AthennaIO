import { ContextContract } from '@athenna/http'
import { Container } from 'Providers/Container'
import { WelcomeServiceContract } from 'App/Contracts/WelcomeServiceContract'

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
   * Return the welcome payload
   *
   * @param ctx
   * @return Promise<any>
   */
  async show({ response }: ContextContract) {
    const data = await this.welcomeService.findOne()

    return response.status(200).send(data)
  }
}
