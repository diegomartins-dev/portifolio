import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private basepath = 'https://cms-api-portifolio.herokuapp.com/api/';
  constructor(private http: HttpClient) {}

  loggerCreate(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.basepath + 'logger/create', body, httpOptions);
  }

  getAll() {
    return 'API datas';
  }
}
