import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../components/shared/alert/alert.service';
import { ApiDgsiteService } from '../services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private API: ApiDgsiteService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.API.getToken()) {
      return true;
    } else {
      if (route.url[0].path !== 'login') {
        this.alertService.setAlert({
          type: 'danger',
          message: 'Não pode acessar sem está logado!',
        });
      }
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // console.log(route.data);
    // const { email, id } = this.API.getLogin();
    // this.API.getByEmail('users', email).subscribe((result) => {
    //   console.log(result);
    // });
    return true;
  }
}
