import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protocol = 'https';
  host = 'api.oasdiff.com';
  endpoint = `${this.protocol}://${this.host}`

  constructor(private http: HttpClient) { }
  sendBreakingChanges(original: string, revision: string) {
    const body = {
      "base": original,
      "revision": revision
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basic });
    
    return this.http.post(`${this.endpoint}/breaking-changes`, body, {headers: {'Content-Type':  'application/x-www-form-urlencoded'}});
  }

}
