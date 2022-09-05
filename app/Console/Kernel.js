import { Folder, Path } from '@secjs/utils'
import { TestCommandsLoader } from '@athenna/test'
import { ArtisanLoader, ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  /**
   * Register the commands for the application.
   *
   * @return {any[]}
   */
  get commands() {
    const internalCommands = []

    if (Env('NODE_ENV') !== 'production') {
      internalCommands.push(
        ...ArtisanLoader.loadCommands(),
        ...TestCommandsLoader.loadCommands(),
      )
    }

    const appCommands = new Folder(Path.console('Commands'))
      .loadSync()
      .getFilesByPattern('**/*.js', true)
      .map(command => import(command.href))

    return [...internalCommands, ...appCommands]
  }

  /**
   * Register the custom templates for the application.
   *
   * @return {any[]}
   */
  get templates() {
    return [
      ...TestCommandsLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
