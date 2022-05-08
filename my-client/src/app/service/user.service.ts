import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError, retry, Observable} from 'rxjs';
import { IDuser } from '../model/user';
const baseUrl: string="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }

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


  getAllUsers(): Observable<IDuser[]>{
    return this._http.get<IDuser[]>(`${baseUrl}/users`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
