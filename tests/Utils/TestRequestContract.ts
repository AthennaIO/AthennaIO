import { InjectOptions } from 'fastify'
import * as LightMyRequest from 'light-my-request'

export interface TestRequestContract {
  (options: InjectOptions | string): Promise<LightMyRequest.Response>
}
