import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import * as footer from './footer.mock.json';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private location: Location, private API: ApiDgsiteService) {}

  getAll() {
    return this.API.getPublished('footer').pipe(
      map((items) => ({
        ...items,
        ...items.data?.sections?.map(
          (items: any) => (items.href = this.location.path() + items.href)
        ),
      }))
    );
  }
}
