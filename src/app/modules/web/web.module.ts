import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AboutComponent,
    CarouselComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AboutComponent,
    CarouselComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebModule {}
