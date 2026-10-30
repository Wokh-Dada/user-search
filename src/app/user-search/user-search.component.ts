import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs';
import { UserSearchResultsComponent } from './components/user-search-results/user-search-results.component';
import { ERROR_STATE, LOADING_STATE, SEARCH_DEBOUNCE_MS } from './constants/user-search.constants';
import { IUserSearchState } from './interfaces/user-search-state.interface';
import { USERS_SERVICE } from './tokens/users-service.token';

@Component({
  selector: 'demo-user-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    UserSearchResultsComponent,
  ],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent {
  private readonly usersService = inject(USERS_SERVICE);

  protected readonly searchControl = new FormControl('', { nonNullable: true });

  private readonly queryChanges$ = this.searchControl.valueChanges.pipe(
    map((query) => query.trim().toLowerCase()),
  );

  protected readonly state = toSignal(
    this.queryChanges$.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(SEARCH_DEBOUNCE_MS),
      switchMap((query) =>
        this.usersService.searchUsers(query).pipe(
          map((users): IUserSearchState => ({ users, status: 'ready' })),
          startWith(LOADING_STATE),
          catchError(() => of(ERROR_STATE)),
          takeUntil(this.queryChanges$.pipe(filter((nextQuery) => nextQuery !== query))),
        ),
      ),
    ),
    { initialValue: LOADING_STATE },
  );

  protected onClearSearch(): void {
    this.searchControl.setValue('');
  }
}