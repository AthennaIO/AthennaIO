#!/usr/bin/env node

import { Ignite } from '@athenna/core'

async function main() {
  process.env.NODE_ENV = 'production'
  process.env.CALL_PATH = process.cwd()

  const application = await new Ignite().fire(import.meta.url, {
    bootLogs: false,
  })
  const artisan = await application.bootArtisan()

  await artisan.main()
}

main().catch()
