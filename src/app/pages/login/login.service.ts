import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { setLogin } from 'src/app/redux/actions/login.action';
import {
  ContentfulApiService,
  IResponse,
} from 'src/app/services/contentful-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private contentful: ContentfulApiService,
    private router: Router,
    private store: Store<{ app: any }>,
    private alertService: AlertService
  ) {}

  login(email: string, password: string) {
    this.contentful.login(email, password).then(({ status, message, id }) => {
      if (status == 'success') {
        this.alertService.setAlert({ type: 'success', message });
        this.setLogin(email, password, id);
        this.router.navigateByUrl('/admin');
      }
      if (status == 'error') {
        this.alertService.setAlert({ type: 'danger', message });
        this.setLogout();
      }
      return;
    });
  }

  setLogin(email: string, password: string, id?: string) {
    localStorage.setItem('login', JSON.stringify({ email, password, id }));
    this.store.dispatch(setLogin({ payload: { email, password, id } }));
  }

  setLogout() {
    localStorage.removeItem('login');
  }
}
