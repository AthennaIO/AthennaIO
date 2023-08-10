import { Test, type Context } from '@athenna/test'
import { BaseE2ETest } from '#tests/helpers/BaseE2ETest'

export default class AppControllerTest extends BaseE2ETest {
  @Test()
  public async shouldBeAbleToGetThePayloadFromApi({ request }: Context) {
    const response = await request.get('/api/v1')

    response.assertStatusCode(200)
    response.assertBodyContains({
      name: '@athenna/athenna',
      version: '1.0.0',
      source: 'https://github.com/AthennaIO',
      description: 'Athenna is awesome!',
    })
  }
}
