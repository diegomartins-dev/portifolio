import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { V1AboutComponent } from './v1/about/about.component';
import { V1CarouselComponent } from './v1/carousel/carousel.component';
import { V1FooterComponent } from './v1/footer/footer.component';
import { V1HeaderComponent } from './v1/header/header.component';
import { V1ProjectsComponent } from './v1/projects/projects.component';
import { WebRoutingModule } from './web-routing.module';
import { V1HomeComponent } from './v1/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { V2HomeComponent } from './v2/home/home.component';
import { V2FooterComponent } from './v2/footer/footer.component';
import { V2HeaderComponent } from './v2/header/header.component';
import { V2SidenavComponent } from './v2/sidenav/sidenav.component';
import { V2BodyComponent } from './v2/body/body.component';

@NgModule({
  declarations: [
    V1AboutComponent,
    V1CarouselComponent,
    V1ProjectsComponent,
    V1HeaderComponent,
    V1FooterComponent,
    V1HomeComponent,
    V2HomeComponent,
    V2FooterComponent,
    V2HeaderComponent,
    V2SidenavComponent,
    V2BodyComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    V1AboutComponent,
    V1CarouselComponent,
    V1ProjectsComponent,
    V1HeaderComponent,
    V1FooterComponent,
    V1HomeComponent,
    V2HomeComponent,
    V2FooterComponent,
    V2HeaderComponent,
    V2SidenavComponent,
    V2BodyComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class WebModule {}
