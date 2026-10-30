import { IUserSearchState } from '../interfaces/user-search-state.interface';

export const SEARCH_DEBOUNCE_MS = 300;

export const LOADING_STATE: IUserSearchState = { users: [], status: 'loading' };
export const ERROR_STATE: IUserSearchState = { users: [], status: 'error' };
