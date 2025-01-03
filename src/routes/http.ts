import { Route } from '@athenna/http'

Route.get('/', 'HomeController.index')

Route.group(() => {
  Route.get('/', 'AppController.show')
}).prefix('/api/v1')
