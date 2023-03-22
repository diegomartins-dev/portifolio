import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: ApiDgsiteService) {}

  getAbout() {
    return this.API.selectAll('about');
  }

  save(data: any) {
    return this.API.add('about', data);
  }

  update(data: any) {
    return this.API.set('about', data.id, data);
  }
}
