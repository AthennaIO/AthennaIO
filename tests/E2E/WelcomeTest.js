import { Test } from '@athenna/test'

export class WelcomeTest extends Test {
  /**
   * Run your test.
   *
   * @param {import('#src/index').HttpTestContext} ctx
   */
  async shouldReturnMockedWelcomePayloadFromApi({ request }) {
    const response = await request.get('/api/welcome')

    response.assertStatusCode(200)
    response.assertBodyContains({ data: { mock: true } })
  }
}
