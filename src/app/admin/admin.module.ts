import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeViewComponent } from './home/home-view/home-view.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, HomeViewComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [HomeComponent, AboutComponent, HomeViewComponent],
})
export class AdminModule {}
