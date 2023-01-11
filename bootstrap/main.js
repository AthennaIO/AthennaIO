import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

async function main() {
  install()

  process.env.IS_ARTISAN = 'false'
  process.env.BOOT_LOGS = 'true'

  const application = await new Ignite().fire()

  await application.bootArtisan()
  await application.bootHttpServer()

  console.log()
}

main().catch()
