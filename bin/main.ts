#!/usr/bin/env node

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

import { Ignite } from '@athenna/core'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const ignite = await new Ignite().load(import.meta.url, {
  bootLogs: false,
  athennaRcPath: 'bin/.athennarc.prod.json'
})

await ignite.console(process.argv, { displayName: 'Athenna' })
