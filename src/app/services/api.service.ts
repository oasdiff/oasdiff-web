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
    return this.http.post(`${this.endpoint}/breaking-changes`, body, {'Content-Type':  'application/x-www-form-urlencoded'});
  }

}
