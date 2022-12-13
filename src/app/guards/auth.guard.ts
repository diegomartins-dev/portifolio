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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private alertService: AlertService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loginStorage = localStorage.getItem('login') || '';

    if (loginStorage) {
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
    console.log(route.data);
    return true;
  }
}
