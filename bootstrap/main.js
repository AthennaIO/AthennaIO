import { Ignite } from '@athenna/core'

async function main() {
  const application = await new Ignite().fire(import.meta.url)

  await application.bootArtisan()
  await application.bootHttpServer()

  console.log()
}

main().catch()
