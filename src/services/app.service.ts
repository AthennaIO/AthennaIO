import { Service } from '@athenna/ioc'

@Service()
export class AppService {
  public findOne() {
    return {
      name: '@athenna/athenna',
      domain: null,
      version: '1.0.0',
      description: 'Athenna is awesome!',
      source: 'https://github.com/AthennaIO',
    }
  }
}
