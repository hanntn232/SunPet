import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { Todo } from '../model/todo';
const baseUrlTodo: string="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  public selectedId: any;
  constructor(private _http: HttpClient) {
   }
   ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): Observable<Todo[]>{
    return this._http.get<Todo[]>(`${baseUrlTodo}/todos`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  postTodo(data:Todo){
    return this._http.post<Todo>(`${baseUrlTodo}/todos`, data);
  }
  updateTodo(id:string, newdata:Todo):Observable<any>{
    return this._http.patch(`${baseUrlTodo}/todos/${id}`, newdata);
  }
  deleteTodo(id:string){
    return this._http.delete(`${baseUrlTodo}/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
