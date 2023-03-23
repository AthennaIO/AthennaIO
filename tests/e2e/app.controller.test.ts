import { Test, TestContext } from '@athenna/test'
import { BaseE2ETest } from '#tests/helpers/base.e2e.test'

export default class AppControllerTest extends BaseE2ETest {
  @Test()
  public async shouldBeAbleToGetTheHelloPayloadFromApi({ request }: TestContext) {
    const response = await request.get('/')

    response.assertStatusCode(200)
    response.assertBodyDeepEqual({ message: 'Hello World!' })
  }
}
