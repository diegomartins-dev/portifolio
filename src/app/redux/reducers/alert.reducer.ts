import { createReducer, on } from '@ngrx/store';
import { setAlert } from '../actions/alert.action';
import { initialState } from '../store';

export const alertReducer = createReducer(
  initialState,
  on(setAlert, (state, action) => ({
    ...state,
    alert: { type: action.payload.type, message: action.payload.message },
  }))
);
