import { createAction, props } from '@ngrx/store';
import { IAlert } from '../interfaces/alert.interface';

export const setAlert = createAction('set alert', props<{ payload: IAlert }>());
