import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { JsonEditorComponent } from 'src/app/components/shared/json-editor/json-editor.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HomeViewComponent,
    JsonEditorComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    HomeComponent,
    AboutComponent,
    HomeViewComponent,
    JsonEditorComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
