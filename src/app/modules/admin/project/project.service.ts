import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private API: ApiDgsiteService) {}

  getProject() {
    return this.API.getAll('project');
  }

  save(data: any) {
    let items = {
      id: data.id,
      publish: data.publish,
      data: { profile: { ...data.profile }, content: { ...data.content } },
    };
    if (items.id) {
      return this.API.update('project', data);
    } else {
      return this.API.save('project', data);
    }
  }
}
