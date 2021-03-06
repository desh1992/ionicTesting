import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api');
  }

}
