export * from '@japa/runner'

import { Application } from '@athenna/core'

declare module '@japa/runner' {
  interface TestContext {
    application: Application
  }
}
