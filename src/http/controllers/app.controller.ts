import { React } from '@athenna/vite'
import { Controller, type Context } from '@athenna/http'

@Controller()
export class AppController {
  public async index({ request, response }: Context) {
    const { createApp } = await React.loadEntrypoint()

    const element = await React.renderComponent(createApp(request.baseUrl))

    return response.view('index', { element })
  }
}
