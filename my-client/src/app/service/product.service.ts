import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IDproduct } from '../model/product';
const baseUrlProduct: string="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { 
  }
  ngOnInit(): void {
  }

  getProductListByCategory(category: String): Observable<IDproduct[]>{
    return this._http.get<IDproduct[]>(`${baseUrlProduct}/products/${category}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }

}
