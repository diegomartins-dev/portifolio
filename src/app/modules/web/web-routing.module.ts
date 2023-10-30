import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2HelloComponent } from './v2/pages/hello/hello.component';
import { V2ContactComponent } from './v2/pages/contact/contact.component';
import { V2ProjectsComponent } from './v2/pages/projects/projects.component';
import { V2AboutComponent } from './v2/pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  {
    path: 'hello',
    component: V2HelloComponent,
  },
  {
    path: 'contact',
    component: V2ContactComponent,
  },
  {
    path: 'projects',
    component: V2ProjectsComponent,
  },
  {
    path: 'about',
    component: V2AboutComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V2WebRoutingModule {}
