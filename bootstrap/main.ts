import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

import { Ignite } from '@athenna/core/src/Ignite'

async function main() {
  sourceMapSupport.install()

  const application = await new Ignite(__filename).fire()
  await application.bootHttpServer()
}

main().catch()
