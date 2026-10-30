import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { API_DELAY_MS, MOCK_USERS } from '../constants/users.constants';
import { IUser } from '../interfaces/user.interface';
import { IUsersService } from '../interfaces/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
  searchUsers(query: string): Observable<IUser[]> {
    const normalizedQuery = query.trim().toLowerCase();

    return timer(API_DELAY_MS).pipe(
      map(() =>
        MOCK_USERS.filter(
          (user) =>
            user.name.toLowerCase().includes(normalizedQuery) ||
            user.email.toLowerCase().includes(normalizedQuery),
        ),
      ),
    );
  }
}
