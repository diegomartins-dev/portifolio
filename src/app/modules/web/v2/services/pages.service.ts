import { Injectable } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';

@Injectable({
  providedIn: 'root',
})
export class V2PagesService {
  constructor(private API: V2ApiService) {}

  getAllPages() {
    return this.API.getAllPages(`v2/`);
  }
}
