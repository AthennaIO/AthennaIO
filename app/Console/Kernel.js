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
    return [
      ...ArtisanLoader.loadCommands(),
      ...HttpCommandsLoader.loadCommands(),
      ...TestCommandsLoader.loadCommands(),
    ]
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
    ]
  }
}
