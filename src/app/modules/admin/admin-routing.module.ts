import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../../guards/auth.guard';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
  {
    path: 'home/view',
    pathMatch: 'full',
    component: HomeViewComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'write' },
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
