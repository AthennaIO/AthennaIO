import { Test, type Context } from '@athenna/test'
import { BaseCliTest } from '@athenna/core/testing/BaseCliTest'

export default class AppCommandTest extends BaseCliTest {
  @Test()
  public async shouldBeAbleToGetTheStdoutOfAppCommand({ assert }: Context) {
    const { stdout, stderr } = await this.execute('app')

    assert.equal(stderr, '')
    assert.isTrue(stdout.includes(`Application information's:`))
    assert.isTrue(stdout.includes('@athenna/athenna'))
    assert.isTrue(stdout.includes('Athenna is awesome!'))
  }
}
