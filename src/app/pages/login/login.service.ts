import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { setLogin } from 'src/app/redux/actions/login.action';
import { ILogin } from 'src/app/redux/interfaces/login.interface';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ApiDgsiteService {
  constructor(
    private router: Router,
    private store: Store<{ app: any }>,
    private alertService: AlertService,
    public override http: HttpClient
  ) {
    super(http);
  }

  override login(email: string, password: string) {
    return super.login(email, password);
  }

  getEmail() {
    let login = localStorage.getItem('login') || '';
    let email = login ? JSON.parse(login)?.email : '';
    return email;
  }

  setLogin(data: ILogin) {
    localStorage.setItem('login', JSON.stringify({ ...data }));
    this.store.dispatch(setLogin({ payload: { ...data } }));
  }

  setLogout() {
    localStorage.removeItem('login');
    this.alertService.setAlert({
      type: 'success',
      message: 'Deslogado com sucesso!',
    });
    this.router.navigateByUrl('/login');
  }
}
