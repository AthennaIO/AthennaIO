import { File, Path } from '@secjs/utils'
import { TestIgnite } from '../Utils/TestIgnite'
import { WelcomeServiceMock } from '../Stubs/WelcomeServiceMock'
import { TestRequestContract } from '../Utils/TestRequestContract'

describe('\n[E2E] WelcomeTest', () => {
  let request: TestRequestContract
  const testIgnite = new TestIgnite()

  beforeAll(async () => {
    /**
     * Just coping the .env.example to .env.test
     */
    new File(Path.pwd('.env.example')).loadSync().copySync(Path.pwd('.env.test'))

    /**
     * Mocking WelcomeService using the global 'ioc' instance
     * it's important for this code to stay before where we ignite
     * the application
     */
    ioc.mock('App/Services/WelcomeService', WelcomeServiceMock)

    request = await testIgnite.createApplication().startHttp()
  })

  it('should return mocked welcome payload from API', async () => {
    const status = 200
    const method = 'GET'
    const path = '/api/welcome'

    const { json } = await request({ path, method })

    const body = json()

    expect(body.method).toBe(method)
    expect(body.status).toBe(status)
    expect(body.data).toStrictEqual({ mock: true })
  })

  afterAll(async () => {
    await testIgnite.closeHttp()
    await File.safeRemove(Path.pwd('.env.test'))
  })
})
