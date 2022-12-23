import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: ApiDgsiteService) {}

  getAbout() {
    return this.API.getAll('about').pipe(
      map((item: any) => {
        item.data.map((dt: any) => {
          delete dt.__v;
          delete dt.createdAt;
          delete dt.updatedAt;
          dt.id = dt._id;
          delete dt._id;
        });

        return item.data;
      })
    );
  }

  save(data: any) {
    let items = {
      id: data.id,
      publish: data.publish,
      data: { profile: { ...data.profile }, content: { ...data.content } },
    };
    console.log(data);
    if (items.id) {
      return this.API.update('about', data);
    } else {
      return this.API.save('about', data);
    }
  }
}
