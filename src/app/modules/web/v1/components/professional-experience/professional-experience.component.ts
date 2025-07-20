import { Component, OnInit } from '@angular/core';
import { V1ApiService } from 'src/app/services/api-v1.service';

export interface ProfessionalExperience {
  id?: string;
  company: string;
  position: string;
  period: string;
  description: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
}

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {
  experiences: ProfessionalExperience[] = [];

  constructor(private api: V1ApiService) { }

  ngOnInit(): void {
    this.api.selectAll('experiences').then((res: any) => {
      if (res.status === 'success') {
        this.experiences = res.data.sort((a: ProfessionalExperience, b: ProfessionalExperience) => {
          const dateA = new Date(b.endDate || b.startDate || '').getTime();
          const dateB = new Date(a.endDate || a.startDate || '').getTime();
          return dateA - dateB;
        });
      }
    });
  }
}
