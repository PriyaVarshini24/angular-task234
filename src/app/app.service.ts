import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  public link: any;
  getuserlink(param: any, type: any) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/' + type + '?id=' + param
    );
  }
  getuserlink1(type: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/' + type);
  }
}
