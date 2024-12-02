import { Injectable } from '@angular/core';
import { environment } from '../envirnment/envirnment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getcourses():Observable<any>{
    return this.http.get(`${this.apiUrl}/courses`)
  }


}
