import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, throwError, of } from 'rxjs';

export interface IResponseData {
  publish: string;
  createdAt: string;
  updatedAt: string;
  data?: any;
}

export interface IResponse {
  status: string;
  message?: string;
  token?: string;
  data?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiDgsiteService {
  url = 'https://api-dgsite.onrender.com/api/';

  constructor(public http: HttpClient) {}

  getToken() {
    let login = localStorage.getItem('login') || '';
    return login ? JSON.parse(login)?.token : false;
  }

  getAll(path: string) {
    return this.http.get(this.url + path.replace('/', '')).pipe(
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

  getById(path: string, id: string) {
    return this.http.post(this.url + `${path.replace('/', '')}/find`, { id });
  }

  getByParam(path: string, param: {}): Observable<IResponse> {
    return this.http
      .post(this.url + `${path.replace('/', '')}/find`, {
        ...param,
      })
      .pipe(
        map((result: any) => result as IResponse),
        catchError((err) => of({ ...err.error }) as Observable<IResponse>)
      );
  }

  getPublished(path: string): Observable<IResponseData> {
    return this.http
      .get(this.url + path.replace('/', '') + '/published')
      .pipe(map((result: any) => result.data as IResponseData));
  }

  login(email: string, password: string): Observable<IResponse> {
    return this.http.post(this.url + 'users/login', { email, password }).pipe(
      map((result: any) => result as IResponse),
      catchError((err) => of({ ...err.error }) as Observable<IResponse>)
    );
  }

  save(path: string, data: any): Observable<IResponse> {
    return this.http
      .post(this.url + path.replace('/', '') + '/create', data)
      .pipe(map((result: any) => result as IResponse));
  }

  update(path: string, data: any) {
    return this.http
      .post(this.url + path.replace('/', '') + '/update', data)
      .pipe(map((result: any) => result as IResponse));
  }
}
