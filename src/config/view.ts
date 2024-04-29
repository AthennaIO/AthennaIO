import { Path } from '@athenna/common'
import { Env, Config } from '@athenna/config'

export default {
  /*
  |--------------------------------------------------------------------------
  | Default view disk
  |--------------------------------------------------------------------------
  |
  | Here you may define the default view disk of your application.
  |
  | ```typescript
  | // Render the Path.views('home.edge') file
  | View.render('home')
  |
  | // Render the Path.views('pages/posts/post.edge') file
  | View.render('pages/posts/post')
  | ```
  |
  */

  disk: Path.views(),

  /*
  |--------------------------------------------------------------------------
  | Named view disks
  |--------------------------------------------------------------------------
  |
  | Here you may define the named view disks of your application. Different
  | from the `disk`, named disks are rendered with the alias in front:
  |
  | ```typescript
  | View.render('mydisk::myview', { name: 'Athenna' })
  | ```
  |
  */

  namedDisks: {},

  /*
  |--------------------------------------------------------------------------
  | In memory view components
  |--------------------------------------------------------------------------
  |
  | Here you may define your in-memory components. Components works exactly
  | like any other view, the only difference is that they are saved in-memory
  | instead of reloading the view file every-time.
  |
  */

  components: {},

  /*
  |--------------------------------------------------------------------------
  | Shared global properties
  |--------------------------------------------------------------------------
  |
  | Here you may define the properties you want to be available between all
  | your views. By default, we have already set the `env` and `config`
  | helpers for you.
  |
  */

  properties: {
    env: Env,
    config: Config
  },

  /*
  |--------------------------------------------------------------------------
  | Edge options
  |--------------------------------------------------------------------------
  |
  | Define any option accepted by `Edge.create()` method. By default `cache`
  | option will be set if in production environment.
  |
  */

  edge: {
    /*
    |--------------------------------------------------------------------------
    | Cache
    |--------------------------------------------------------------------------
    |
    | The templates are re-compiled whenever you call the `View.render()` method.
    | Meaning that if you change your template while your application is running,
    | the next time `View.render()` is called it will have the new changes.
    | You must enable the cache mode in production to avoid re-compiling the
    | templates. The compiled output will be saved within the memory.
    |
    */

    cache: Env('APP_ENV') === 'production'
  }
}
