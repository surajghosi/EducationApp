import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ReturnStatement } from '@angular/compiler';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any;
  constructor(public http: HttpClient) { }
  loadData(){
    
   return this.http.get('assets/data/questions.json')
}
}



