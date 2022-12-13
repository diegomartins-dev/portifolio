import { BrowserModule } from '@angular/platform-browser';
import { ImageComponent } from './components/shared/image/image.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducers/root.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    AdminComponent,
    LoginComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: rootReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
