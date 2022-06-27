import { test } from '@japa/runner'

test.group('WelcomeTest', () => {
  test('should return mocked welcome payload from API', async ({ request }) => {
    const response = await request.get('/api/welcome')

    response.assertStatusCode(200)
    response.assertBodyContains({ data: { mock: true } })
  })
})
