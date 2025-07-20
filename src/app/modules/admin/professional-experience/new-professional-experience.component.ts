import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { ProfessionalExperienceService } from './professional-experience.service';
import { onSave } from '../helpers/components';

@Component({
  selector: 'app-new-professional-experience',
  templateUrl: './new-professional-experience.component.html',
  styleUrls: ['./new-professional-experience.component.scss'],
})
export class NewProfessionalExperienceComponent implements OnInit {
  constructor(
    private professionalExperienceService: ProfessionalExperienceService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      ...json,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(items, this.professionalExperienceService, this.alertService);
  }
} 