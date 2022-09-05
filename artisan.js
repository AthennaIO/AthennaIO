#!/usr/bin/env node

import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

async function main() {
  install()

  process.env.BOOT_LOGS = 'false'

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')
}

main().catch()
