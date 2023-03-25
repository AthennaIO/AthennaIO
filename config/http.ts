export default {
  /*
  |--------------------------------------------------------------------------
  | Application host
  |--------------------------------------------------------------------------
  |
  | This value is the HOST of your application, and it's used to access your
  | application.
  |
  */

  host: Env('HOST', '127.0.0.1'),

  /*
  |--------------------------------------------------------------------------
  | Application port
  |--------------------------------------------------------------------------
  |
  | This value is the PORT of your application, and it's used to access your
  | application.
  |
  */

  port: Env('PORT', 3000),

  /*
  |--------------------------------------------------------------------------
  | Application domain
  |--------------------------------------------------------------------------
  |
  | This value is the APP_DOMAIN of your application, and it's used to access your
  | application.
  |
  */

  domain: Env('APP_DOMAIN', 'http://localhost:1335'),

  /*
  |--------------------------------------------------------------------------
  | Log http requests
  |--------------------------------------------------------------------------
  |
  | This value defines if HttpKernel will register a Logger to log all the
  | server requests.
  |
  */

  logger: Env('LOG_HTTP', true),

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/cors plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/cors plugins. Check
  | the documentation for more information:
  |
  | https://github.com/fastify/fastify-cors
  |
  */

  cors: {
    origin: ['*'],
    methods: ['*'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
    maxAge: 0,
    credentials: false,
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for cls-rtracer plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for cls-rtracer plugins. Check
  | the documentation for more information:
  |
  | https://github.com/puzpuzpuz/cls-rtracer
  |
  */

  rTracer: {
    echoHeader: false,
    useHeader: false,
    headerName: 'X-Request-Id',
    useFastifyRequestId: false,
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/helmet plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/helmet plugins. Check
  | the documentation for more information:
  |
  | https://github.com/fastify/fastify-helmet
  |
  */

  helmet: {
    global: true,
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/swagger and @fastify/swagger-ui plugins.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/swagger and
  | @fastify/swagger-ui plugins. Check the documentation for more information:
  |
  | https://github.com/fastify/fastify-swagger
  | https://github.com/fastify/fastify-swagger-ui
  |
  */

  swagger: {
    ui: {
      staticCSP: true,
      routePrefix: '/documentation',
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
          description: Config.get('app.description'),
        },
        externalDocs: {
          url: 'https://athenna.io',
          description: 'Find more info about Athenna here',
        },
      },
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Configurations for @fastify/rate-limit plugin.
  |--------------------------------------------------------------------------
  |
  | This values defines all the configurations for @fastify/rate-limit plugin.
  | Check the documentation for more information:
  |
  | https://github.com/fastify/fastify-rate-limit
  |
  */

  rateLimit: {
    global: true,
    max: 1000,
    ban: null,
    timeWindow: 1000 * 60,
    cache: 5000,
    allowList: [],
    continueExceeding: false,
    enableDraftSpec: false,
  },
}
