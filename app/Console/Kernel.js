import { HttpLoader } from '@athenna/http'
import { CoreLoader } from '@athenna/core'
import { Folder, Path } from '@athenna/common'
import { ArtisanLoader, ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  /**
   * Register the commands for the application.
   *
   * @return {any[]}
   */
  get commands() {
    return [...this.internalCommands, ...this.testCommands, ...this.appCommands]
  }

  /**
   * Register template files to use in "makeFile"
   * method of Artisan commands.
   *
   * @return {any[]}
   */
  get templates() {
    return [
      ...this.internalTemplates,
      ...this.testTemplates,
      ...this.appTemplates,
    ]
  }

  /**
   * Get the app commands in Path.console('Commands').
   *
   * @return {any[]}
   */
  get appCommands() {
    const path = Path.console('Commands')

    if (!Folder.existsSync(path)) {
      return []
    }

    return new Folder(path)
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  /**
   * Get the test commands in Path.nodeModules('@athenna/test/src/Commands').
   *
   * @return {any[]}
   */
  get testCommands() {
    return new Folder(Path.nodeModules('@athenna/test/src/Commands'))
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  /**
   * Get the internal commands of Athenna.
   *
   * @return {any[]}
   */
  get internalCommands() {
    return [
      ...HttpLoader.loadCommands(),
      ...CoreLoader.loadCommands(),
      ...ArtisanLoader.loadCommands(),
    ]
  }

  /**
   * Get the app commands in Path.resources('templates').
   *
   * @return {any[]}
   */
  get appTemplates() {
    const path = Path.resources('templates')

    if (!Folder.existsSync(path)) {
      return []
    }

    return new Folder(path).getFilesByPattern('**/*.edge', true)
  }

  /**
   * Get the test templates in Path.nodeModules('@athenna/test/templates').
   *
   * @return {any[]}
   */
  get testTemplates() {
    return new Folder(
      Path.nodeModules('@athenna/test/templates'),
    ).getFilesByPattern('**/*.edge', true)
  }

  /**
   * Get the internal templates of Athenna.
   *
   * @return {any[]}
   */
  get internalTemplates() {
    return [
      ...CoreLoader.loadTemplates(),
      ...HttpLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
