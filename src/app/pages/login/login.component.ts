import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import { AlertService } from '../../components/shared/alert/alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  alert!: string;
  message!: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private loginService: LoginService,
    private API: ApiDgsiteService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.API.getToken()) {
      this.router.navigateByUrl('/admin');
    }
  }

  ngOnInit(): void {}

  handleLogin() {
    const { email, password } = this.formGroup.value;

    if (!email || !password) {
      this.alertService.setAlert({
        type: 'warning',
        message: 'Os campos obrigatórios estão em branco',
      });
      return;
    }

    this.loading = true;

    this.loginService.login(email, password).subscribe({
      next: (data: any) => {
        if (data.status == 'success' && data.token) {
          this.loginService.setLogin({ email, password, token: data.token });
          this.router.navigateByUrl('/admin');
          this.loading = false;
        } else if (data.message) {
          this.alertService.setAlert({
            type: 'danger',
            message: data.message,
          });
          this.loading = false;
        } else if (data[0].message.indexOf('must be a valid email') != -1) {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Informe um email válido!',
          });
          this.loading = false;
        } else {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Erro ao logar!',
          });
          this.loading = false;
        }
      },
      error: () => {
        this.alertService.setAlert({
          type: 'danger',
          message: 'Erro ao fazer o login',
        });
        this.loginService.setLogout();
        this.loading = false;
      },
    });
  }
}
