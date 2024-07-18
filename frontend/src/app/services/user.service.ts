import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url = environment.url;
  // header = environment.headers;
  url = "http://localhost:3000/api";
  headers = {
    headers: new HttpHeaders().set('Content-Type', "application/json")
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  test() {
    return this.httpClient.get(this.url + "/user")
  }
  registerAccount(data: any) {
    return this.httpClient.post(this.url + "/user/insertData", data, this.headers)
  }


}
