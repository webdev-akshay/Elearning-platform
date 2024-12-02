import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envirnment/envirnment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private apiUrl=environment.apiUrl;
  constructor(private http: HttpClient,private router:Router) {}

  login(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users?username=${username}&password=${password}`);
  }
  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
