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
    if (Env('NODE_ENV') === 'production') {
      return [...this.#internalCommands(), ...this.#appCommands()]
    }

    return [
      ...this.#internalCommands(),
      ...this.#testCommands(),
      ...this.#appCommands(),
    ]
  }

  /**
   * Register template files to use in "makeFile"
   * method of Artisan commands.
   *
   * @return {any[]}
   */
  get templates() {
    if (Env('NODE_ENV') === 'production') {
      return [...this.#internalTemplates(), ...this.#appTemplates()]
    }

    return [
      ...this.#internalTemplates(),
      ...this.#testTemplates(),
      ...this.#appTemplates(),
    ]
  }

  /**
   * Get the app commands in Path.console('Commands').
   *
   * @return {any[]}
   */
  #appCommands() {
    return new Folder(Path.console('Commands'))
      .loadSync()
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  /**
   * Get the test commands in Path.nodeModules('@athenna/test/src/Commands').
   *
   * @return {any[]}
   */
  #testCommands() {
    return new Folder(Path.nodeModules('@athenna/test/src/Commands'))
      .loadSync()
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  /**
   * Get the internal commands of Athenna.
   *
   * @return {any[]}
   */
  #internalCommands() {
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
  #appTemplates() {
    return new Folder(Path.resources('templates'))
      .loadSync()
      .getFilesByPattern('**/*.edge', true)
  }

  /**
   * Get the test templates in Path.nodeModules('@athenna/test/templates').
   *
   * @return {any[]}
   */
  #testTemplates() {
    return new Folder(Path.nodeModules('@athenna/test/templates'))
      .loadSync()
      .getFilesByPattern('**/*.edge', true)
  }

  /**
   * Get the internal templates of Athenna.
   *
   * @return {any[]}
   */
  #internalTemplates() {
    return [
      ...CoreLoader.loadTemplates(),
      ...HttpLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
