import { test } from '@japa/runner'
import { Artisan } from '@athenna/artisan'

test.group('WelcomeTest', () => {
  test('should return mocked welcome payload from API', async ({ assert }) => {
    const useCase = async () => await Artisan.call('welcome')

    await assert.doesNotRejects(useCase)
  })
})
