import { Ignite } from '@athenna/core'

/*
|--------------------------------------------------------------------------
| CI
|--------------------------------------------------------------------------
|
| This file will not exist in user's project. The purpose of this file is
| to check if the bootstrap of the application is exiting without errors.
|
*/

const ignite = await new Ignite().load(import.meta.url)

await ignite.artisan(process.argv, { displayName: 'Artisan' })
