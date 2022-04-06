import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

import { Ignite } from '@athenna/core/src/Ignite'

async function main() {
  sourceMapSupport.install()

  const application = new Ignite(__filename).createApplication()

  await application.bootHttpServer()
}

main().catch()
