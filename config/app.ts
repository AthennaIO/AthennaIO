export default {
  /*
  |--------------------------------------------------------------------------
  | Default environment
  |--------------------------------------------------------------------------
  |
  | Default environment of the application.
  |
  */

  environment: process.env.APP_ENV || 'production',

  /*
  |--------------------------------------------------------------------------
  | Application debug
  |--------------------------------------------------------------------------
  |
  | Set if the application will start in debug mode or not. If in debug mode,
  | the application will show sensitive logs and return sensitive data on errors.
  |
  */

  debug: Env('APP_DEBUG', true),

  /*
  |--------------------------------------------------------------------------
  | Application Name
  |--------------------------------------------------------------------------
  |
  | This value is the name of your application and can used when you
  | need to place the application's name in a email, view or
  | other location.
  |
  */

  name: Env('APP_NAME', '@athenna/athenna'),

  /*
  |--------------------------------------------------------------------------
  | Application Version
  |--------------------------------------------------------------------------
  |
  | This value is the version of your application and can used when you
  | need to place the application's version in a route, view or
  | other location.
  |
  */

  version: Env('APP_VERSION', '1.0.0'),

  /*
  |--------------------------------------------------------------------------
  | Application Description
  |--------------------------------------------------------------------------
  |
  | This value is the description of your application and can used when you
  | need to place the application's description in swagger, view or
  | other location.
  |
  */

  description: Env('APP_DESCRIPTION', 'Athenna is awesome!'),

  /*
  |--------------------------------------------------------------------------
  | Application source url
  |--------------------------------------------------------------------------
  |
  | This value is the application source url, usually a link to a git repo-
  | sitory.
  |
  */

  source: Env('APP_SOURCE', 'https://github.com/AthennaIO'),

  /*
  |--------------------------------------------------------------------------
  | Documentation url
  |--------------------------------------------------------------------------
  |
  | This value is the application documentation url, usually a link to the
  | main documentation of the API.
  |
  */

  documentation: Env('APP_DOCUMENTATION', 'http://localhost:3000/docs'),

  /*
  |--------------------------------------------------------------------------
  | Default Locale
  |--------------------------------------------------------------------------
  |
  | Default locale to be used by Intl provider. You can always switch drivers
  | in runtime or use the official Intl middleware to detect the driver
  | based on HTTP headers/query string.
  |
  */

  locale: Env('APP_LOCALE', 'en')
}
