import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  loadQuestionList(subjectId: any) {
    return this.http.get(`${environment.APIURL}Question?subjectId=`+subjectId);
  }
}
