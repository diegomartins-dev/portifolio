import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private API: ApiDgsiteService) {}

  getProject() {
    return this.API.selectAll('project');
  }

  update(data: any) {
    return this.API.update('project', data.id, data);
  }

  save(data: any) {
    return this.API.add('project', data);
  }
}
