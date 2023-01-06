import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private API: ApiDgsiteService) {}

  getAbout() {
    return this.API.getAll('footer');
  }

  save(data: any) {
    return this.API.save('footer', data);
  }

  update(data: any) {
    return this.API.update('footer', data);
  }
}
