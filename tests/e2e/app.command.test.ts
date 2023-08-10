import { Test, type Context } from '@athenna/test'
import { BaseE2ETest } from '#tests/helpers/base.e2e.test'

export default class AppCommandTest extends BaseE2ETest {
  @Test()
  public async shouldBeAbleToGetTheStdoutOfAppCommand({ assert }: Context) {
    const { stdout, stderr } = await this.execute('app')

    assert.equal(stderr, '')
    assert.isTrue(stdout.includes(`Application information's:`))
    assert.isTrue(stdout.includes('@athenna/athenna'))
    assert.isTrue(stdout.includes('Athenna is awesome!'))
  }
}
