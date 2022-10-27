#!/usr/bin/env node

import { install } from 'source-map-support'
import { Ignite, ProviderHelper } from '@athenna/core'

async function main() {
  install()

  process.env.BOOT_LOGS = 'false'
  process.env.CALL_PATH = process.cwd()

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')

  if (!Config.get('app.protectedCommands').includes(process.argv[2])) {
    await ProviderHelper.shutdownAll(Env('SHUTDOWN_LOGS', false))
  }
}

main().catch()
