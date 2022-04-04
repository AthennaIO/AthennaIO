import { WelcomeServiceContract } from '../../app/Contracts/WelcomeServiceContract'

export class WelcomeServiceMock implements WelcomeServiceContract {
  async findOne(): Promise<any> {
    return { mock: true }
  }
}
