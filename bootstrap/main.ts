#!/usr/bin/env -S node --experimental-import-meta-resolve

import { Ignite } from '@athenna/core'

/*
|--------------------------------------------------------------------------
| Ignite
|--------------------------------------------------------------------------
|
| Here is where your application will bootstrap. Ignite class will be res
| ponsible to bootstrap your application partial or complete. Is not reco
| mmended to bootstrap the Athenna application completely by calling the
| "fire" method, you should always let the type of application determine if
| the application should be fully bootstrapped or not.
|
*/

const ignite = await new Ignite().load(import.meta.url, {
  bootLogs: false,
  athennaRcPath: './.athennarc.prod.json'
})

/*
|--------------------------------------------------------------------------
| Artisan
|--------------------------------------------------------------------------
|
| Bootstrap the Artisan application.
|
*/

await ignite.artisan(process.argv, { displayName: 'Athenna' })
