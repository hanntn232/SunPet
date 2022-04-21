import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { IDblog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogchitietService {
  public urlBlog: string = "assets/data/blog.json"

  constructor(private _http: HttpClient) { }

  getBlogList(): Observable<IDblog[]>{
    return this._http.get<IDblog[]>(this.urlBlog)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
