import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError, retry, Observable } from 'rxjs';
import { User } from '../model2/user';
const baseUrl: string = "http://localhost:3000"
const API_URL = 'http://localhost:3000/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // getAllUsers(): Observable<IDuser[]>{
  //   return this._http.get<IDuser[]>(`${baseUrl}/users`)
  //   .pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   )
  // }

  // handleError(error: HttpErrorResponse){
  //   return throwError(()=> new Error(error.message))
  // }
  logOut(){
    return localStorage.removeItem('token');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/users`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }


  kiemTraDangNhap(token: string | null) {
    if (token != null) {
      return true
    }
    else
      return false;
  }

  getUserBytoken(){
    var token = localStorage.getItem('token');
    var user = new User();
    this.getAllUsers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].token == token) {
          user.ho = data[i].ho,
            user.ten = data[i].ten,
            user.sdt = data[i].sdt,
            user.matKhau = data[i].matKhau,
            user.role = data[i].role,
            user.token = data[i].token,
            user._id = data[i]._id,
            user.diaChi = data[i].diaChi
            // console.log(user.token);
            // console.log(token)
          return user;
        }
      }
      return "User not found"
    }
    )
  }

  postUser(user: User): Observable<any>{
    return this.http.post<User>(`${baseUrl}/users`, user);
  }
}
