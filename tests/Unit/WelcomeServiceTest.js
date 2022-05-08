import { test } from '@japa/runner'
import { WelcomeService } from '#app/Services/WelcomeService'

test.group('WelcomeServiceTest', () => {
  test('should return concrete welcome payload from service', async ({ assert }) => {
    const welcomeService = new WelcomeService()

    const { name, domain, version, description, source } = await welcomeService.findOne()

    assert.equal(name, '@athenna/scaffold')
    assert.equal(version, '1.0.0')
    assert.equal(domain, 'http://localhost:1335')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(
      description,
      "The Athenna scaffold project used by 'athenna new project' command to create your project.",
    )
  })
})
