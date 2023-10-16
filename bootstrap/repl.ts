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

const ignite = await new Ignite().load(import.meta.url, { bootLogs: false })

/*
|--------------------------------------------------------------------------
| REPL Session
|--------------------------------------------------------------------------
|
| Bootstrap the repl application.
|
*/

const repl = await ignite.repl()

/*
|--------------------------------------------------------------------------
| Extending the REPL session
|--------------------------------------------------------------------------
|
| This space is reserved for you to register your own REPL commands and
| register data in the REPL context.
|
*/

await repl.importAll('@athenna/common')

repl.setInContext('appService', ioc.safeUse('App/Services/AppService'))
