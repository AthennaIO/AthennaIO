#!/usr/bin/env node

import { Ignite } from '@athenna/core'

async function main() {
  const application = await new Ignite().fire(import.meta.url, {
    bootLogs: false,
  })
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')

  if (!Config.get('app.protectedCommands').includes(process.argv[2])) {
    process.exit()
  }
}

main().catch()
