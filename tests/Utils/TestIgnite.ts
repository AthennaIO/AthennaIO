import 'reflect-metadata'
import { Http } from '@athenna/http'
import { Ignite } from '@athenna/core/src/Ignite'
import { TestRequestContract } from './TestRequestContract'

export class TestIgnite {
  static httpInstance: Http | null

  get httpServerRequest(): TestRequestContract {
    const server = this.httpServer

    return server.request.bind(server)
  }

  get httpServer(): Http {
    return TestIgnite.httpInstance as Http
  }

  async startHttp() {
    if (TestIgnite.httpInstance) {
      return
    }

    TestIgnite.httpInstance = await new Ignite(__filename).httpServer()
  }

  async closeHttp() {
    if (!TestIgnite.httpInstance) {
      return
    }

    await TestIgnite.httpInstance.close()

    TestIgnite.httpInstance = null
  }
}
