import { createAction, props } from '@ngrx/store';

export const setLogin = createAction(
  'set login',
  props<{ payload: { email: string; password: string; id?: string } }>()
);
