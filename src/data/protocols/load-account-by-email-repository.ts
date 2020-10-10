import { AccountModel } from '../../domain/models/account'

export interface LoadAccountByEmailRepository {
  load (emial: string): Promise<AccountModel>
}
