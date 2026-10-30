import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UserSearchComponent } from './app/user-search/user-search.component';

bootstrapApplication(UserSearchComponent, appConfig).catch((error: unknown) =>
  console.error(error),
);
