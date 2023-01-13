import { Ignite } from '@athenna/core'

async function main() {
  process.env.IS_ARTISAN = 'false'

  const application = await new Ignite().fire()

  await application.bootArtisan()
  await application.bootHttpServer()

  console.log()
}

main().catch()
