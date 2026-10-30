import { InjectionToken } from '@angular/core';
import { IUsersService } from '../interfaces/users-service.interface';

export const USERS_SERVICE = new InjectionToken<IUsersService>(
  '[USERS_SERVICE]: Поиск пользователей',
);
