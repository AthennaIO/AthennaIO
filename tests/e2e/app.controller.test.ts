import { Test, type Context } from '@athenna/test'
import { BaseE2ETest } from '#tests/helpers/base.e2e.test'

export default class AppControllerTest extends BaseE2ETest {
  @Test()
  public async shouldBeAbleToGetTheHelloPayloadFromApi({ request }: Context) {
    const response = await request.get('/')

    response.assertStatusCode(200)
    response.assertBodyContains({
      name: '@athenna/athenna',
      version: '1.0.0',
      source: 'https://github.com/AthennaIO',
      description: 'Athenna is awesome!',
    })
  }
}
