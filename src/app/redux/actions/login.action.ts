import { createAction, props } from '@ngrx/store';
import { ILogin } from '../interfaces/login.interface';

export const setLogin = createAction('set login', props<{ payload: ILogin }>());
