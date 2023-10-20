/**
 * @athenna/athenna
 *
 * (c) Your Name <your@email.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Config, Rc } from '@athenna/config'
import { ViewProvider } from '@athenna/view'
import { Artisan, ArtisanProvider } from '@athenna/artisan'
import { MakeExampleCommand } from '#src/commands/MakeExampleCommand'

process.env.IS_TS = 'true'

await Config.loadAll(Path.fixtures('config'))
await Rc.setFile(Path.pwd('package.json'))

new ViewProvider().register()
new ArtisanProvider().register()

Artisan.register(MakeExampleCommand)

await Artisan.parse(process.argv, 'Artisan')
