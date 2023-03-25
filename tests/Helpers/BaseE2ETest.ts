import { Ignite } from '@athenna/core'
import { Artisan } from '@athenna/artisan'
import { AfterEach, BeforeAll, BeforeEach, ExitFaker } from '@athenna/test'

export class BaseE2ETest {
  public ignite: Ignite

  @BeforeAll()
  public async beforeAll() {
    this.ignite = await new Ignite().load(import.meta.url, { bootLogs: false, loadConfigSafe: false })
  }

  @BeforeEach()
  public async beforeEach() {
    ExitFaker.fake()
  }

  @AfterEach()
  public async afterEach() {
    ExitFaker.release()
  }

  /**
   * Execute your bootstrap/artisan.ts file inside a child process.
   */
  public async execute(command: string): Promise<{ stdout: string; stderr: string }> {
    return Artisan.callInChild(command, Path.bootstrap('artisan.ts'))
  }
}
