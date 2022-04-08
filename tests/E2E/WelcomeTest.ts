import { TestIgnite } from '../Utils/TestIgnite'
import { WelcomeServiceMock } from '../Stubs/WelcomeServiceMock'
import { TestRequestContract } from '../Utils/TestRequestContract'

describe('\n[E2E] WelcomeTest', () => {
  let request: TestRequestContract
  let testIgnite = new TestIgnite()

  beforeAll(async () => {
    /**
     * Mocking WelcomeService using the global 'ioc' instance
     * it's important for this code to stay before where we ignite
     * the application
     */
    ioc.mock('App/Services/WelcomeService', WelcomeServiceMock)

    testIgnite = await testIgnite.fire()

    request = await testIgnite.startHttp()
  })

  it('should return mocked welcome payload from API', async () => {
    const statusCode = 200
    const method = 'GET'
    const path = '/api/welcome'

    const { json } = await request({ path, method })

    const body = json()

    expect(body.method).toBe(method)
    expect(body.statusCode).toBe(statusCode)
    expect(body.data).toStrictEqual({ mock: true })
  })

  afterAll(async () => {
    await testIgnite.closeHttp()
  })
})
