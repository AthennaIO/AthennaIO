import { test } from '@japa/runner'

test.group('WelcomeTest', () => {
  test('should return mocked welcome payload from API', async ({ assert, request }) => {
    const statusCode = 200
    const method = 'GET'
    const path = '/api/welcome'

    const { json } = await request({ path, method })

    const body = json()

    assert.equal(body.method, method)
    assert.equal(body.statusCode, statusCode)
    assert.deepEqual(body.data, { mock: true })
  })
})
