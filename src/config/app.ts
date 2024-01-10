export default {
  environment: process.env.APP_ENV || 'production',
  debug: Env('APP_DEBUG', true),
  name: Env('APP_NAME', '@athenna/athenna'),
  version: Env('APP_VERSION', '1.0.0'),
  description: Env('APP_DESCRIPTION', 'Athenna is awesome!'),
  source: Env('APP_SOURCE', 'https://github.com/AthennaIO'),
  documentation: Env('APP_DOCUMENTATION', 'http://localhost:3000/docs'),
  locale: Env('APP_LOCALE', 'en')
}
