import { React } from '@athenna/vite'
import { Inject } from '@athenna/ioc'
import { AppService } from '#src/services/app.service'
import { Controller, type Context } from '@athenna/http'

@Controller()
export class AppController {
  @Inject()
  private readonly appService: AppService

  public async index({ request, response }: Context) {
    const { createApp } = await React.loadEntrypoint()

    const element = await React.renderComponent(createApp(request.baseUrl))

    return response.view('index', { element })
  }

  public async show({ response }: Context) {
    const data = this.appService.findOne()

    return response.status(200).send(data)
  }
}
