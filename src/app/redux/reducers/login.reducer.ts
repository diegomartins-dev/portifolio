import { createReducer, on } from '@ngrx/store';
import { setLogin } from '../actions/login.action';
import { initialState } from '../store';

export const loginReducer = createReducer(
  initialState,
  on(setLogin, (state, action) => ({
    ...state,
    login: {
      email: action.payload.email,
      password: action.payload.password,
      id: action.payload.id,
    },
  }))
);
