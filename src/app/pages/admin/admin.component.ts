import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentfulApiService } from 'src/app/services/contentful-api.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  user?: { email: string };

  constructor(
    private contentfulService: ContentfulApiService,
    private loginService: LoginService,
    private store: Store<{ app: any }>
  ) {}

  ngOnInit(): void {
    const loginStorage = localStorage.getItem('login') || '';
    const login = JSON.parse(loginStorage);

    this.contentfulService.getEntry(login.id).then((res) => {
      this.loginService.setLogin(res.email, res.password, login.id);
      this.user = { email: res.email };
    });
  }
}
