import { Injectable } from '@angular/core';
import * as db from '../../mock/db.json';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  getAll() {
    return db;
  }
}
