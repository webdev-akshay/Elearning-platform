import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envirnment/envirnment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }


  getSiderImages():Observable<any>{
    return this.http.get(`${this.apiUrl}/sliderImages`)
  }
}
