import { badRequest } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpRequest.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}