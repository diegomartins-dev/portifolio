import { Injectable } from '@angular/core';
import { map, of, throwError, timeout } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import { about } from './about.mock';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: ApiDgsiteService) {}

  getItemsAbout() {
    return this.API.getPublished('about').pipe(map((res) => res.data));
  }
}
