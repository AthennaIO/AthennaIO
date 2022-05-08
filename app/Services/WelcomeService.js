export class WelcomeService {
  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor() {}

  async findOne() {
    return {
      name: Config.get('app.name'),
      domain: Config.get('http.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }
  }
}
