import { RequiredFieldValidation } from './required-filed-validation'
import { MissingParamError } from '../../errors/missing-param-error'

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })

    expect(error).toEqual(new MissingParamError('field'))
  })
})
