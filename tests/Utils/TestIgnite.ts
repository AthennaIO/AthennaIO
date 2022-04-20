import 'reflect-metadata'
import { Http } from '@athenna/http'
import { Ignite } from '@athenna/core/src/Ignite'
import { Application } from '@athenna/core/src/Application'
import { TestRequestContract } from 'Tests/Utils/TestRequestContract'

export class TestIgnite {
  private application: Application

  async fire(): Promise<this> {
    this.application = await new Ignite(__filename).fire()

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
