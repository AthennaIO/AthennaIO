import { Ignite } from '@athenna/core'
import { ServerImpl } from '@athenna/http'
import { AfterAll, BeforeAll } from '@athenna/test'

export class BaseE2ETest {
  public ignite: Ignite
  public httpServer: ServerImpl

  @BeforeAll()
  public async beforeAll() {
    this.ignite = await new Ignite().load(import.meta.url, {
      bootLogs: false,
      loadConfigSafe: false,
      environments: ['test'],
    })

    this.httpServer = await this.ignite.httpServer({
      port: 3000,
      trace: true,
      host: 'localhost',
    })
  }

  @AfterAll()
  public async afterEach() {
    await this.httpServer.close()
  }
}
