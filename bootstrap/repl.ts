import { Ignite } from '@athenna/core'

/*
|--------------------------------------------------------------------------
| Ignite
|--------------------------------------------------------------------------
|
| Here is where your application will bootstrap. Ignite class will be res
| ponsible to bootstrap your application partial or complete. Is not reco
| mmended to bootstrap the Athenna application completelly by calling the
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
| REPL Context
|--------------------------------------------------------------------------
|
| This space is reserved for you to add your own custom context to the your
| REPL session.
|
*/

await import('@athenna/common').then(common => {
  Object.keys(common).forEach(key => (repl.context[key] = common[key]))
})

repl.context.appService = ioc.safeUse('App/Services/AppService')
