/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { File, Path } from '@athenna/common'
import { Test, type Context } from '@athenna/test'
import { BaseCommandTest } from '#tests/helpers/BaseCommandTest'

export default class MakeExampleTest extends BaseCommandTest {
  @Test()
  public async shouldBeAbleToCreateAnExampleFile({ assert, command }: Context) {
    const output = await command.run('make:example TestExample')

    output.assertSucceeded()
    output.assertLogged('[ MAKING EXAMPLE ]')
    output.assertLogged('[  success  ] Example "TestExample" successfully created.')
    output.assertLogged('[  success  ] Athenna RC updated: [ services += "#app/services/TestExample" ]')

    const { athenna } = await new File(Path.pwd('package.json')).getContentAsJson()

    assert.isTrue(await File.exists(Path.services('TestExample.ts')))
    assert.containsSubset(athenna.services, ['#app/services/TestExample'])
  }

  @Test()
  public async shouldBeAbleToCreateAExampleFileWithADifferentDestPathAndImportPath({ assert, command }: Context) {
    const output = await command.run('make:example TestExample', {
      path: Path.fixtures('consoles/console-mock-dest-import.ts')
    })

    output.assertSucceeded()
    output.assertLogged('[ MAKING EXAMPLE ]')
    output.assertLogged('[  success  ] Example "TestExample" successfully created.')
    output.assertLogged(
      '[  success  ] Athenna RC updated: [ services += "#tests/fixtures/storage/services/TestExample" ]'
    )

    const { athenna } = await new File(Path.pwd('package.json')).getContentAsJson()

    assert.isTrue(await File.exists(Path.fixtures('storage/services/TestExample.ts')))
    assert.containsSubset(athenna.services, ['#tests/fixtures/storage/services/TestExample'])
  }

  @Test()
  public async shouldThrowAnExceptionWhenTheFileAlreadyExists({ command }: Context) {
    await command.run('make:example TestExample')
    const output = await command.run('make:example TestExample')

    output.assertFailed()
    output.assertLogged('[ MAKING EXAMPLE ]')
    output.assertLogged('The file')
    output.assertLogged('TestExample.ts')
    output.assertLogged('already exists')
  }
}
