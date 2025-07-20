import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { onUpdate } from '../helpers/components';
import { ProfessionalExperienceService } from './professional-experience.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss'],
})
export class ProfessionalExperienceComponent implements OnInit {
  json = [];

  constructor(
    private professionalExperienceService: ProfessionalExperienceService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.professionalExperienceService
      .getExperiences()
      .then((result: any) => {
        this.json = result;
      })
      .catch((err) => {
        this.json = [];
      });
  }

  onSave(json: any) {
    let items = {
      ...json,
      id: json.id,
      publish: json.publish,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(items, this.professionalExperienceService, this.alertService);
  }
} 