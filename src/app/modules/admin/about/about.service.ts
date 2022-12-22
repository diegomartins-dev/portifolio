import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: ApiDgsiteService) {}

  getAbout() {
    return this.API.getAll('about');
  }
}
