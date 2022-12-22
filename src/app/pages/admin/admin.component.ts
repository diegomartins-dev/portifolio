import { Component, OnInit } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  user?: { name: string };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    let email = this.loginService.getEmail();
    this.loginService.getByParam('users', { email }).subscribe({
      next: (result: any) => {
        this.user = {
          name: result.data && result.data.name ? result.data.name : '',
        };
      },
    });
  }

  handleExit() {
    this.loginService.setLogout();
  }
}
