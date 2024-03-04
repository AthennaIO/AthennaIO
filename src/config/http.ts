import { Path } from '@athenna/common'

export default {
  host: Env('HOST', '0.0.0.0'),
  port: Env('PORT', 3000),
  domain: Env('APP_DOMAIN', 'http://localhost:3000'),

  logger: {
    enabled: Env('LOG_HTTP', true),
    ignoreCodes: [],
    ignoreStatuses: []
  },

  cors: {
    enabled: true,
    origin: ['*'],
    methods: ['*'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
    maxAge: 0,
    credentials: false
  },

  rTracer: {
    enabled: true,
    echoHeader: false,
    useHeader: false,
    headerName: 'X-Request-Id',
    useFastifyRequestId: false
  },

  helmet: {
    enabled: true,
    global: true
  },

  swagger: {
    enabled: true,
    ui: {
      staticCSP: true,
      routePrefix: '/docs'
    },
    configurations: {
      mode: 'dynamic',
      swagger: {
        basePath: '/',
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
          title: Config.get('app.name'),
          version: Config.get('app.version'),
          description: Config.get('app.description')
        },
        externalDocs: {
          url: 'https://athenna.io',
          description: 'Find more info about Athenna here'
        }
      }
    }
  },

  rateLimit: {
    enabled: true,
    global: true,
    max: 1000,
    ban: null,
    timeWindow: 1000 * 60,
    cache: 5000,
    allowList: [],
    continueExceeding: false,
    enableDraftSpec: false
  },

  static: {
    enabled: true,
    root: Path.public(),
    prefix: '/public/'
  }
}
