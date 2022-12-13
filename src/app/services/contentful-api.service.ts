import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

export interface IResponse {
  status: string;
  message: string;
  id?: string;
  roles?: object;
}

@Injectable({
  providedIn: 'root',
})
export class ContentfulApiService {
  private client = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });

  constructor() {}

  getEntries(query?: any): Promise<Entry<any>[]> {
    return this.client.getEntries(query).then((res: any) => {
      return res.items;
    });
  }

  getEntry(id: string, query?: any): Promise<any> {
    return this.client.getEntry(id, query).then((res: any) => {
      return res.fields;
    });
  }

  getUsersEntry() {
    // return this.client.getContentType('users');
    return this.getEntries({ content_type: 'users' });
  }

  getFooterEntry() {
    return this.getEntries({ content_type: 'footer' });
  }

  login(email: string, password: string): Promise<IResponse> {
    return this.client
      .getEntries({ content_type: 'users' })
      .then((res) => {
        return res.items.map((entry: any) => {
          let entryEmail = entry.fields['email'] || undefined;
          let entryPassword = entry.fields['password'] || undefined;

          if (entryEmail) {
            let md5 = new Md5();
            let passHash = md5.appendStr(password).end();
            if (entryEmail === email && entryPassword === passHash) {
              return {
                status: 'success',
                message: 'logado com sucesso!',
                id: entry.sys.id,
              };
            }
            return false;
          }
          return false;
        });
      })
      .then((res: any) => {
        return res.reduce((a: any, b: any) => {
          if (b) {
            a = { ...b };
          }
          return a;
        }, {});
      })
      .then((res) => {
        return Object.getOwnPropertyNames(res).length > 0
          ? res
          : {
              status: 'error',
              message: 'Não existe esse usuário!',
            };
      })
      .catch(() => ({
        status: 'error',
        message: 'Não foi possivel fazer o login',
      }));
  }
}
