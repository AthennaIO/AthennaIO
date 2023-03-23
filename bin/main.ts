import { Ignite } from '@athenna/core'

const ignite = await new Ignite().load(import.meta.url)

await ignite.httpServer({
  port: 3000,
  host: '0.0.0.0',
  routePath: '#src/routes/http.route',
})
