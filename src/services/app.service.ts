import { Service } from '@athenna/core'

@Service()
export class AppService {
  public hello(): string {
    return 'Hello World!'
  }
}
