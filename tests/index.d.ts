export * from '@japa/runner'

import { InjectOptions } from 'fastify'
import { Chain } from 'light-my-request'
import { Application } from '@athenna/core'

declare module '@japa/runner' {
  interface TestContext {
    application: Application
    request: (options?: InjectOptions | string) => Chain
  }
}
