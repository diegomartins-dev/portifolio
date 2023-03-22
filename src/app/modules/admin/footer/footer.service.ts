import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private API: ApiDgsiteService) {}

  getFooter() {
    return this.API.selectAll('footer');
  }

  save(data: any) {
    return this.API.add('footer', data);
  }

  update(data: any) {
    return this.API.set('footer', data.id, data);
  }
}
