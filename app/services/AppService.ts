import { Service } from '@athenna/ioc'
import { Config } from '@athenna/config'

@Service()
export class AppService {
  public findOne() {
    return {
      name: Config.get('app.name'),
      domain: Config.get('http.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }
  }
}
