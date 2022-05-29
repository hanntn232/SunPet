import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { IDblog } from '../model/blog';
const baseUrlBlog: string="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class BlogchitietService {

  constructor(private _http: HttpClient) { }

  getBlogList(): Observable<IDblog[]>{
    return this._http.get<IDblog[]>(`${baseUrlBlog}/blogs`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
      
  }
  postBlog(data:FormData){
    return this._http.post(`${baseUrlBlog}/blogs`, data);
  }
  updateBlog(id:string, newdata: FormData):Observable<any>{
    return this._http.patch(`${baseUrlBlog}/blogs/${id}`, newdata);
  }
  deleteBlog(id:string){
    return this._http.delete(`${baseUrlBlog}/blogs/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
