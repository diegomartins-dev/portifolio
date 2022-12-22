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

  override login(email: string, password: string): any {
    super.login(email, password).subscribe({
      next: (data) => {
        if (data.status == 'success' && data.token) {
          this.setLogin({ email, password, token: data.token });
          this.router.navigateByUrl('/admin');
          this.alertService.setAlert({
            type: 'success',
            message: 'logado com sucesso!',
          });
        } else if (data.message) {
          this.alertService.setAlert({
            type: 'danger',
            message: data.message,
          });
          this.setLogout();
        } else {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Erro ao logar!',
          });
          this.setLogout();
        }
      },
      error: () => {
        this.alertService.setAlert({
          type: 'danger',
          message: 'Erro ao fazer o login',
        });
        this.setLogout();
      },
    });
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
