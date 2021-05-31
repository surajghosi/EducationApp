import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ReturnStatement } from '@angular/compiler';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  loadClassList() {
    return this.http.get(`${environment.APIURL}Class`);
  }
}
