#!/usr/bin/env node

import { Ignite, ProviderHelper } from '@athenna/core'

async function main() {
  process.env.IS_ARTISAN = 'true'

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')

  if (!Config.get('app.protectedCommands').includes(process.argv[2])) {
    await ProviderHelper.shutdownAll(Env('SHUTDOWN_LOGS', false))
  }
}

main().catch()
