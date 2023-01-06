import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(
    private API: ApiDgsiteService,
    private alertService: AlertService
  ) {}

  getProject() {
    return this.API.getAll('project');
  }

  update(data: any) {
    return this.API.update('project', data);
  }

  save(data: any) {
    return this.API.save('project', data);
  }
}
