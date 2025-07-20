import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { NewAboutComponent } from './about/new-about/new-about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NewFooterComponent } from './footer/new-footer/new-footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { NewProfessionalExperienceComponent } from './professional-experience/new-professional-experience.component';

@NgModule({
  declarations: [
    AboutComponent,
    NewAboutComponent,
    NewFooterComponent,
    NewProjectComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    ProfessionalExperienceComponent,
    NewProfessionalExperienceComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [
    AboutComponent,
    NewAboutComponent,
    NewFooterComponent,
    NewProjectComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    SharedModule,
    ProfessionalExperienceComponent,
    NewProfessionalExperienceComponent,
  ],
})
export class AdminModule {}
