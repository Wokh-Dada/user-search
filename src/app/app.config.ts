import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { UsersService } from './user-search/services/users.service';
import { USERS_SERVICE } from './user-search/tokens/users-service.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: USERS_SERVICE, useClass: UsersService },
  ],
};
