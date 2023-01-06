import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { footer } from './footer.mock';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  getAll() {
    return of(footer);
  }
}
