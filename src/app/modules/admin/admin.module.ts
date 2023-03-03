import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JsonEditorComponent } from 'src/app/shared/json-editor/json-editor.component';
import { JsonPageEditComponent } from 'src/app/shared/json-page-edit/json-page-edit.component';
import { JsonPageViewComponent } from 'src/app/shared/json-page-view/json-page-view.component';
import { AboutComponent } from './about/about.component';
import { NewAboutComponent } from './about/new-about/new-about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NewFooterComponent } from './footer/new-footer/new-footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    JsonEditorComponent,
    JsonPageViewComponent,
    JsonPageEditComponent,
    AboutComponent,
    NewAboutComponent,
    NewFooterComponent,
    NewProjectComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    JsonEditorComponent,
    JsonPageViewComponent,
    JsonPageEditComponent,
    AboutComponent,
    NewAboutComponent,
    NewFooterComponent,
    NewProjectComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
