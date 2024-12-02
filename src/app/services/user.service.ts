import { Injectable } from '@angular/core';
import { environment } from '../envirnment/envirnment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  checkUserCredentials(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users?username=${username}&password=${password}`).pipe(
      map((users: string | any[]) => {
        if (users.length > 0) {
          return true; // Credentials match
        } else {
          return false; // No match found
        }
      }),
      catchError(() => of(false)) // On error, assume credentials don't match
    );
  }


  createUser(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/users`,user);
  }



}
