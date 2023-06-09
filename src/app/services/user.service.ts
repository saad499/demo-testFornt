import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>("http://localhost:8080/user/"+id);
  }

  public addUser(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/user",user);
  }
  public signIn(username:string, password: string): Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/signin",{username,password});
  }
}
