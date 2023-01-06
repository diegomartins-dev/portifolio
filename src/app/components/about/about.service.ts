import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { about } from './about.mock';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  getItemsAbout() {
    return of(about);
  }
}
