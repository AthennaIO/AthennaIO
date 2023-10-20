/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import ExampleConfigurer from '../../../configurer/index.js'

import { Test, type Context, Mock } from '@athenna/test'

export default class ConfigurerTest {
  @Test()
  public async shouldBeAbleToConfigureTheOrgLibName({ assert }: Context) {
    const configurer = new ExampleConfigurer()

    Mock.when(configurer.logger, 'success').return(undefined)

    await configurer.configure()

    assert.calledOnceWith(configurer.logger.success, '@org/libname successfully configured')
  }
}
