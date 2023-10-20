/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { debug } from '#src/debug'
import type { RunOutput } from '#src/types'

export class ExampleImpl {
  /**
   * Execute your code logic.
   */
  public run(): RunOutput {
    debug('executing run method of ExampleImpl')

    return {
      hello: 'hello from @athenna/athenna!'
    }
  }
}
