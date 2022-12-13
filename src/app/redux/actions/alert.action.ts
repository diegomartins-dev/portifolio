import { createAction, props } from '@ngrx/store';

export const setAlert = createAction(
  'set alert',
  props<{ payload: { type: string; message: string } }>()
);
