import { Test, TestContext } from '@athenna/test'
import { BaseE2ETest } from '#tests/Helpers/BaseE2ETest'

export default class AppCommandTest extends BaseE2ETest {
  @Test()
  public async shouldBeAbleToGetTheStdoutOfAppCommand({ assert }: TestContext) {
    const { stdout, stderr } = await this.execute('app')

    assert.equal(stderr, '')
    assert.isTrue(stdout.includes('Application informations:'))
    assert.isTrue(stdout.includes('@athenna/athenna'))
    assert.isTrue(stdout.includes('Athenna is awesome!'))
  }
}
