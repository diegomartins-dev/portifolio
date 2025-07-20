import { Injectable } from '@angular/core';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalExperienceService {
  constructor(private API: V1ApiService) {}

  getExperiences() {
    return this.API.selectAll('experiences').then((res: any) => res.data);
  }

  update(data: any) {
    return this.API.set('experiences', data.id, data);
  }

  save(data: any) {
    return this.API.add('experiences', data);
  }
} 