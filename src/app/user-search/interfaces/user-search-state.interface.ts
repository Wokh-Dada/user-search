import { IUser } from './user.interface';

export interface IUserSearchState {
  readonly users: readonly IUser[];
  readonly status: 'loading' | 'ready' | 'error';
}
