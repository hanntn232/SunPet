import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { IDproduct } from '../model/product';
const baseUrlProduct: string="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  
  public selectedId: any;
  constructor(private _http: HttpClient){ 
  }
  ngOnInit(): void {
    
  }

  getProductList(): Observable<IDproduct[]>{
    return this._http.get<IDproduct[]>(`${baseUrlProduct}/products`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
