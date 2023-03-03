import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAlert } from 'src/app/redux/actions/alert.action';
import { IAlert } from './alert.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class AlertService {
  constructor(private store: Store<{ app: any }>) {}

  setAlert(alert: IAlert) {
    this.store.dispatch(
      setAlert({
        payload: {
          ...alert,
        },
      })
    );
  }
}
