import { AccountModel } from '../../../domain/models/account'

export interface LoadAccountByEmailRepository {
  loadByEmail (emial: string): Promise<AccountModel>
}
