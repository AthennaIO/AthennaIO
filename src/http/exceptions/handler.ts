import { type ErrorContext, HttpExceptionHandler } from '@athenna/http'

export class Handler extends HttpExceptionHandler {
  public notFoundErrorCodes = ['E_NOT_FOUND_ERROR', 'E_NOT_FOUND_DATA_ERROR']
  public internalErrorCodes = ['E_INTERNAL_ERROR', 'E_INTERNAL_SERVER_ERROR']

  public async handle(ctx: ErrorContext) {
    /**
     * Send a `not-found` page when error codes are from
     * not found.
     */
    if (this.notFoundErrorCodes.includes(ctx.error.code)) {
      await ctx.response.view('pages/not-found')

      return
    }

    /**
     * Send a `internal-error` page when error codes are from
     * internal server error.
     */
    if (this.internalErrorCodes.includes(ctx.error.code)) {
      await ctx.response.view('pages/internal-error')

      return
    }

    super.handle(ctx)
  }
}
