/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { BaseConfigurer } from '@athenna/artisan'

export default class ExampleConfigurer extends BaseConfigurer {
  public async configure() {
    this.logger.success('@org/libname successfully configured')
  }
}
