#!/usr/bin/env node --input-type=module --experimental-import-meta-resolve

import { Ignite } from '@athenna/core'

const ignite = await new Ignite().load(import.meta.url, {
  bootLogs: false,
  beforePath: '',
})

await ignite.artisan(process.argv, { displayName: 'Artisan' })
