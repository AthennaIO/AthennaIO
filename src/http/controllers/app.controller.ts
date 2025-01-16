import { Controller, type Context } from '@athenna/http'

@Controller()
export class AppController {
  public async index({ response }: Context) {
    return response.view('index')
  }
}
