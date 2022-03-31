import { ServiceProvider } from '@athenna/ioc'

export class CustomProvider extends ServiceProvider {
  /**
   * Boot method is called after all main providers has been booted
   *
   * Example: this.container.use('Addons/Database/DatabaseProvider') -> Instance
   */
  boot() {}

  /**
   * Register method is called before main providers has been booted
   *
   * Example: this.container.use('Addons/Database/DatabaseProvider') -> undefined
   */
  register() {}
}
