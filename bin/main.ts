import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

import { Ignite } from '@athenna/core'

if (!process.execArgv.includes('--enable-source-maps')) {
  sourceMapSupport.install({ handleUncaughtExceptions: false })
}

const ignite = await new Ignite().load(import.meta.url)

await ignite.httpServer()
