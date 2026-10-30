import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IUserSearchState } from '../../interfaces/user-search-state.interface';

@Component({
  selector: 'demo-user-search-results',
  standalone: true,
  imports: [MatListModule, MatProgressSpinnerModule],
  templateUrl: './user-search-results.component.html',
  styleUrl: './user-search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchResultsComponent {
  readonly state = input.required<IUserSearchState>();
}
