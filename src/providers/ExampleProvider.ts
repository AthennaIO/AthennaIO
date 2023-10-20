/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ServiceProvider } from '@athenna/ioc'
import { ExampleImpl } from '#src/example/ExampleImpl'

export class ExampleProvider extends ServiceProvider {
  public register() {
    this.container.instance('Org/LibName/Example', new ExampleImpl())
  }
}
