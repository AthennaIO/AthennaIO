import { Route } from '@athenna/http'

/*
|--------------------------------------------------------------------------
| Http Routes
|--------------------------------------------------------------------------
|
| Here is where you can register http routes for your application. These
| routes are loaded by the HttpRouteProvider.
|
*/

Route.get('/', 'AppController.show')

Route.group(() => {
  Route.get('/', 'AppController.show')
}).prefix('/api/v1')
