import { Service } from '@athenna/core'
import { Config } from '@athenna/config'

@Service()
export class AppService {
  public async findOne() {
    return {
      name: Config.get('app.name'),
      domain: Config.get('http.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }
  }
}
