import { Test, type Context } from '@athenna/test'
import { BaseRestTest } from '@athenna/core/testing/BaseRestTest'

export default class AppControllerTest extends BaseRestTest {
  @Test()
  public async shouldBeAbleToGetTheHelloPayloadFromApi({ request }: Context) {
    const response = await request.get('/')

    response.assertStatusCode(200)
    response.assertBodyContains({
      name: '@athenna/athenna',
      version: '1.0.0',
      source: 'https://github.com/AthennaIO',
      description: 'Athenna is awesome!'
    })
  }
}
