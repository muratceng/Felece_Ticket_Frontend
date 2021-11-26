import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://localhost:8093/api/user';

  constructor(private httpClient:HttpClient) { }

  public getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8093/api/user/all');
    
  }

  public addUser(user:User):Observable<String>{
    return this.httpClient.post<String>('http://localhost:8093/user/add',user);
    
}
}
