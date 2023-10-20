/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Example, ExampleImpl, ExampleProvider } from '#src'
import { Test, type Context, AfterEach } from '@athenna/test'

export default class ExampleProviderTest {
  @AfterEach()
  public afterEach() {
    ioc.reconstruct()
  }

  @Test()
  public async shouldBeAbleToRegisterExampleImplClassInTheContainer({ assert }: Context) {
    new ExampleProvider().register()

    assert.isTrue(ioc.has('Org/LibName/Example'))
  }

  @Test()
  public async shouldBeAbleToResolveTheExampleImplClassFromTheContainer({ assert }: Context) {
    new ExampleProvider().register()

    assert.instanceOf(ioc.use('Org/LibName/Example'), ExampleImpl)
  }

  @Test()
  public async shouldBeAbleToResolveTheExampleImplClassFromTheContainerUsingItFacade({ assert }: Context) {
    new ExampleProvider().register()

    assert.instanceOf(Example.getProvider(), ExampleImpl)
  }

  @Test()
  public async shouldBeAbleToExecuteTheExampleImplClassFromItFacade({ assert }: Context) {
    new ExampleProvider().register()

    assert.deepEqual(Example.run(), {
      hello: 'hello from @athenna/athenna!'
    })
  }
}
