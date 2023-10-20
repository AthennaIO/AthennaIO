/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { File, Folder } from '@athenna/common'
import { AfterEach, BeforeEach, Mock } from '@athenna/test'
import { TestCommand } from '@athenna/artisan/testing/plugins'
import { ArtisanProvider, CommanderHandler } from '@athenna/artisan'

export class BaseCommandTest {
  public originalPJson = new File(Path.pwd('package.json')).getContentAsStringSync()

  @BeforeEach()
  public async baseBeforeEach() {
    new ArtisanProvider().register()

    TestCommand.setArtisanPath(Path.fixtures('consoles/base-command.ts'))
  }

  @AfterEach()
  public async baseAfterEach() {
    Mock.restoreAll()
    ioc.reconstruct()
    CommanderHandler.reconstruct()

    await Folder.safeRemove(Path.app())
    await Folder.safeRemove(Path.fixtures('storage'))

    await new File(Path.pwd('package.json')).setContent(this.originalPJson)
  }
}
