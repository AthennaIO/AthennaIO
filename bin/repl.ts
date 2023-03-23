import { Ignite } from '@athenna/core'

const ignite = await new Ignite().load(import.meta.url, {
  bootLogs: false,
  beforePath: '',
})

const repl = await ignite.repl()

repl.context.appService = ioc.safeUse('appService')
