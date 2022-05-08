import { Command } from '@athenna/artisan'

export class WelcomeCommand extends Command {
  /**
   * The name and signature of the console command.
   */
  signature = 'welcome'

  /**
   * The console command description.
   */
  description = 'Display welcome object.'

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
   * Set additional flags in the commander instance.
   * This method is executed when registering your command.
   *
   * @param {import('commander').Command} commander
   * @return {import('commander').Command}
   */
  addFlags(commander) {
    return commander
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
