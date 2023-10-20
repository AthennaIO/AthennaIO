/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Facade } from '@athenna/ioc'
import { ExampleImpl } from '#src/example/ExampleImpl'

export const Example = Facade.createFor<ExampleImpl>('Org/LibName/Example')
