import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

async function main() {
  console.clear()
  install()

  const application = await new Ignite().fire()

  await application.bootArtisan()
  await application.bootHttpServer()
}

main().catch()
