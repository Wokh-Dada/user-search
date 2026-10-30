import { Observable } from 'rxjs';
import { IUser } from './user.interface';

export interface IUsersService {
  searchUsers(query: string): Observable<IUser[]>;
}
