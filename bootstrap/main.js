#!/usr/bin/env node

import { Ignite } from '@athenna/core'

async function main() {
  process.env.IS_ARTISAN = 'false'
  process.env.NODE_ENV = 'production'
  process.env.CALL_PATH = process.cwd()

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main()
}

main().catch()
