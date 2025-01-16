import { Route } from '@athenna/http'

Route.get('*', 'AppController.index')

Route.group(() => {
  Route.get('/', 'AppController.show')
}).prefix('/api/v1')
