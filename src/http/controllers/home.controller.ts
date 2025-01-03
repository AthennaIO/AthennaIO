import { Controller, type Context } from '@athenna/http'

@Controller()
export class HomeController {
  public async index({ response }: Context) {
    return response.view('pages/home')
  }
}
