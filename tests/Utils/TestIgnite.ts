import 'reflect-metadata'
import { Http } from '@athenna/http'
import { Ignite } from '@athenna/core/src/Ignite'
import { TestRequestContract } from './TestRequestContract'
import { Application } from '@athenna/core/src/Application'

export class TestIgnite {
  private application: Application

  createApplication(): this {
    this.application = new Ignite(__filename).createApplication()

    return this
  }

  getApplication(): Application {
    return this.application
  }

  getHttpServer(): Http {
    return this.application.getHttpServer()
  }

  getHttpServerRequest(): TestRequestContract {
    const server = this.getHttpServer()

    return server.request.bind(server)
  }

  async startHttp() {
    await this.application.bootHttpServer()

    return this.getHttpServerRequest()
  }

  async closeHttp() {
    await this.application.shutdownHttpServer()
  }
}
