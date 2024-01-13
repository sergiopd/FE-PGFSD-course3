import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { CabUser } from 'src/assets/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = 'http://localhost:9090/';
  private readonly usersUrl = 'users';

  constructor(
    private http: HttpClient
  ) { }

  public addUser(cabUser: CabUser) {
    const userData = new HttpParams()
    .set('userName', cabUser.userName.toString())
    .set('phone', cabUser.phone.toString())
    .set('email', cabUser.email.toString())
    .set('userPassword', cabUser.userPassword.toString())

    return this.http.post(`${this.baseUrl}${this.usersUrl}/add`, { params: userData });
  }

  public getAllUsers() {
    return this.http.get<CabUser[]>(`${this.baseUrl}${this.usersUrl}/listUsers`);
  }

  public getUser(email: string) {
    const userEmail = new HttpParams().set('email', email.toString())
    return this.http.get<CabUser>(`${this.baseUrl}${this.usersUrl}/getUser`, { params: userEmail });
  }

  public updateUser(cabUser: CabUser) {
    const userData = new HttpParams()
    .set('userName', cabUser.userName.toString())
    .set('phone', cabUser.phone.toString())
    .set('email', cabUser.email.toString())
    .set('userPassword', cabUser.userPassword.toString())

    return this.http.post(`${this.baseUrl}${this.usersUrl}/update`, { params: userData });
  }

  public deleteUser(email: string) {
    const userEmail = new HttpParams().set('email', email.toString())
    return this.http.post(`${this.baseUrl}${this.usersUrl}/delete`, { params: userEmail });
  }

}
