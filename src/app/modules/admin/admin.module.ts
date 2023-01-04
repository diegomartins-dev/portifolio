import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { JsonEditorComponent } from 'src/app/components/shared/json-editor/json-editor.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    JsonEditorComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [HomeComponent, AboutComponent, JsonEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
