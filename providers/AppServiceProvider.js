import { ServiceProvider } from '@athenna/ioc'

export default class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   *
   * @return {void|Promise<void>}
   */
  async register() {}

  /**
   * Bootstrap any application services.
   *
   * @return {void|Promise<void>}
   */
  async boot() {}
}
