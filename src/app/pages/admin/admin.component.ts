import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fader, slider } from 'src/app/pages/admin/route-animation';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  animations: [slider],
})
export class AdminComponent implements OnInit {
  user?: { name: string };

  constructor(
    private loginService: LoginService,
    private contexts: ChildrenOutletContexts
  ) {}

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

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot;
  }
}
