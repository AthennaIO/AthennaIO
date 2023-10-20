/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ExampleImpl } from '#src'
import { Test, type Context } from '@athenna/test'

export default class ExampleTest {
  @Test()
  public shouldBeAbleToRunExampleRunMethod({ assert }: Context) {
    const example = new ExampleImpl()

    assert.deepEqual(example.run(), {
      hello: 'hello from @athenna/athenna!'
    })
  }
}
