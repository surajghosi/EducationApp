import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ReturnStatement } from '@angular/compiler';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  loadSubjectList(classId: any) {
    return this.http.get(`${environment.APIURL}Subject?classId=`+classId);
  }
}
