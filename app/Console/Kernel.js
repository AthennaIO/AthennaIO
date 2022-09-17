import { HttpLoader } from '@athenna/http'
import { TestLoader } from '@athenna/test'
import { CoreLoader } from '@athenna/core'
import { Path, Folder } from '@secjs/utils'
import { ArtisanLoader, ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  /**
   * Register the commands for the application.
   *
   * @return {any[]}
   */
  get commands() {
    const internalCommands = [
      ...ArtisanLoader.loadCommands(),
      ...HttpLoader.loadCommands(),
      ...TestLoader.loadCommands(),
      ...CoreLoader.loadCommands(),
    ]

    const appCommands = new Folder(Path.console('Commands'))
      .loadSync()
      .getFilesByPattern('**/*.js', true)
      .map(command => import(command.href))

    return [...internalCommands, ...appCommands]
  }

  /**
   * Register custom templates files.
   *
   * @return {any[]}
   */
  get templates() {
    return [
      ...HttpLoader.loadTemplates(),
      ...TestLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
