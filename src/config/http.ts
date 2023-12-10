export default {
  host: Env('HOST', '0.0.0.0'),
  port: Env('PORT', 3000),
  trace: true,
  domain: Env('APP_DOMAIN', 'http://localhost:3000'),

  logger: {
    enabled: Env('LOG_HTTP', true)
  },

  cors: {
    origin: ['*'],
    methods: ['*'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
    maxAge: 0,
    credentials: false
  },

  rTracer: {
    echoHeader: false,
    useHeader: false,
    headerName: 'X-Request-Id',
    useFastifyRequestId: false
  },

  helmet: {
    global: true
  },

  swagger: {
    ui: {
      staticCSP: true,
      routePrefix: '/documentation'
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
    global: true,
    max: 1000,
    ban: null,
    timeWindow: 1000 * 60,
    cache: 5000,
    allowList: [],
    continueExceeding: false,
    enableDraftSpec: false
  }
}
