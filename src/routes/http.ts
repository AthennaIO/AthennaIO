import { Route } from '@athenna/http'

Route.get('*', 'AppController.index')

Route.group(() => {
  Route.get('/', () => {
    return { message: 'Hello World!' }
  })
}).prefix('/api/v1')
