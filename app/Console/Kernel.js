import { Path, Folder } from '@secjs/utils'
import { HttpCommandsLoader } from '@athenna/http'
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
    ]
  }

  /**
   * Register custom templates files.
   *
   * @return {import('@secjs/utils').File[] | Promise<any[]>}
   */
  get templates() {
    const http = new Folder(Path.nodeModules('@athenna/http/templates'))

    return [...http.loadSync().files]
  }
}
