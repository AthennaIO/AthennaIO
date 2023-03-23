import { Route } from '@athenna/http'

Route.get('/', 'AppController.show')

Route.group(() => {
  Route.get('/', 'AppController.show')
}).prefix('/api/v1')
