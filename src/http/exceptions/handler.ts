import { type ErrorContext, HttpExceptionHandler } from '@athenna/http'

export class Handler extends HttpExceptionHandler {
  public notFoundErrorCodes = ['E_NOT_FOUND_ERROR', 'E_NOT_FOUND_DATA_ERROR']

  public async handle(ctx: ErrorContext) {
    /**
     * Send a `not-found` page when error codes are from
     * not found.
     */
    if (this.notFoundErrorCodes.includes(ctx.error.code)) {
      await ctx.response.view('not-found')

      return
    }

    super.handle(ctx)
  }
}
