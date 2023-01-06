import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JsonEditorComponent } from 'src/app/components/shared/json-editor/json-editor.component';
import { JsonPageEditComponent } from 'src/app/components/shared/json-page-edit/json-page-edit.component';
import { JsonPageViewComponent } from 'src/app/components/shared/json-page-view/json-page-view.component';

import { AboutComponent } from './about/about.component';
import { NewAboutComponent } from './about/new-about/new-about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    JsonEditorComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    NewProjectComponent,
    JsonPageViewComponent,
    JsonPageEditComponent,
    NewAboutComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    HomeComponent,
    AboutComponent,
    JsonEditorComponent,
    JsonPageViewComponent,
    JsonPageEditComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
