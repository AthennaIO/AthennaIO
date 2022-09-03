#!/usr/bin/env node --input-type module

import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

async function main() {
  install()

  process.env.NODE_ENV = 'production'
  process.env.BOOT_LOGS = 'false'
  process.env.CALL_PATH = process.cwd()

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main()
}

main().catch()
