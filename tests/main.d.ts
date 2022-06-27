export * from '@japa/runner'

import { Application, TestRequest } from '@athenna/core'

declare module '@japa/runner' {
  interface TestContext {
    application: Application
    request: TestRequest
  }
}
