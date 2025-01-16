import { Route } from '@athenna/http'

Route.get('*', 'AppController.index')

Route.group(() => {
  Route.get('/', ({ response }) => {
    response.status(200).send({ message: 'Hello World!' })
  })
}).prefix('/api/v1')
