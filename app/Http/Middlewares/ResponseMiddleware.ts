import { InterceptContextContract, MiddlewareContract } from '@athenna/http'

export class ResponseMiddleware implements MiddlewareContract {
  /**
   * Intercept method is executed before the response has been sent
   *
   * @param ctx
   * @type {(ctx: InterceptContextContract) => any}
   */
  intercept({ request, body, status }: InterceptContextContract): any {
    const newBody: any = {
      code: 'RESPONSE',
      path: request.baseUrl,
      method: request.method,
      status: status,
      data: body,
    }

    if (body && body.meta) {
      newBody.meta = body.meta
      newBody.links = body.links
      newBody.data = body.data
    }

    return newBody
  }
}
