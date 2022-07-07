import { Command } from '@athenna/artisan'

export class WelcomeCommand extends Command {
  /**
   * The name and signature of the console command.
   *
   * @return {string}
   */
  get signature() {
    return 'welcome'
  }

  /**
   * The console command description.
   *
   * @return {string}
   */
  get description() {
    return 'Display welcome object.'
  }

  /**
   * The welcome service dependency.
   *
   * @type {import('#app/Service/WelcomeService')}
   */
  #welcomeService

  /**
   * Use the constructor to resolve any dependency of the Ioc container
   *
   * @param {any} welcomeService
   */
  constructor(welcomeService) {
    super()

    this.#welcomeService = welcomeService
  }

  /**
   * Execute the console command.
   */
  async handle() {
    const welcomePayload = JSON.stringify(
      await this.#welcomeService.findOne(),
      null,
      2,
    )

    this.info(`Welcome payload: ${welcomePayload}`)
  }
}
