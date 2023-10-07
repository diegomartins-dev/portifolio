import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { V1HomeComponent } from '../modules/web/v1/home/home.component';
import { V2HomeComponent } from '../modules/web/v2/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/v2', pathMatch: 'full' },
  {
    path: 'v1',
    pathMatch: 'full',
    component: V1HomeComponent,
    loadChildren: () =>
      import('../modules/web/web.module').then((m) => m.WebModule),
  },
  {
    path: 'v2',
    pathMatch: 'full',
    component: V2HomeComponent,
    loadChildren: () =>
      import('../modules/web/web.module').then((m) => m.WebModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('../modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { roles: 'read' },
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
