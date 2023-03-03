import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { map, of, timeout } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import { Footer } from './footer.mock';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private location: Location, private API: ApiDgsiteService) {}

  getAll() {
    return this.API.getPublished('footer').pipe(map((res) => res.data));
  }
}
