import { BrowserModule } from '@angular/platform-browser';
import { ImageComponent } from './components/shared/image/image.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SobreComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParagraphComponent } from './components/shared/paragraph/paragraph.component';
import { LinkComponent } from './components/shared/link/link.component';
import { SocialMediaComponent } from './components/shared/social-media/social-media.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent,
    ImageComponent,
    ParagraphComponent,
    LinkComponent,
    SocialMediaComponent,
    NotFoundComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
