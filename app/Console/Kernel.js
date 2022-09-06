import { Path, Folder } from '@secjs/utils'
import { HttpCommandsLoader } from '@athenna/http'
import { TestCommandsLoader } from '@athenna/test'
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
      ...HttpCommandsLoader.loadCommands(),
      ...TestCommandsLoader.loadCommands(),
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
   * @return {import('@secjs/utils').File[] | Promise<any[]>}
   */
  get templates() {
    return [
      ...HttpCommandsLoader.loadTemplates(),
      ...TestCommandsLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
