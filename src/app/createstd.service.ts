import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  getstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllStudents';
  countUrl='https://registration-akgec.herokuapp.com/faculty/count';
  getregstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllRegistered';
  getsumUrl='https://registration-akgec.herokuapp.com/faculty/summery'
  constructor(private http: HttpClient) { }
  getStdlist() :Observable<any>{
   const url="https://registration-akgec.herokuapp.com/faculty/getAllStudents";
    return this.http.get<any>(url);
      }
  createStd(data) {
    return this.http.post(this.createstdUrl,data);
  }
  getCount(){
    return this.http.get(this.countUrl);
  }
  getRegstd(){
    return this.http.get(this.getregstdUrl);
  }
  getSummary(){
    return this.http.get(this.getsumUrl);
  }
  
} 
