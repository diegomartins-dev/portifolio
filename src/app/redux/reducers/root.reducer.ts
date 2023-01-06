import { createReducer, on } from '@ngrx/store';
import { setAlert } from '../actions/alert.action';
import { setLogin } from '../actions/login.action';
import { initialState } from '../store';

export const rootReducer = createReducer(
  initialState,
  on(setAlert, (state, action) => ({
    ...state,
    alert: { type: action.payload.type, message: action.payload.message },
  })),
  on(setLogin, (state, action) => ({
    ...state,
    login: {
      email: action.payload.email,
      password: action.payload.password,
      token: action.payload.token,
    },
  }))
);
