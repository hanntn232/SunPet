import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { IDproduct } from '../model/product';
import { updateProduct } from '../model/updateProduct';
const baseUrlProduct: string="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  
  public selectedId: any;
  constructor(private _http: HttpClient){ 
  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): Observable<IDproduct[]>{
    return this._http.get<IDproduct[]>(`${baseUrlProduct}/products`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  getProductById(id:String): Observable<any>{
    return this._http.get<any>(`${baseUrlProduct}/products/${id}`).pipe(retry(2),
    catchError(this.handleError))
  }

  getProductListByCategory(category: String): Observable<IDproduct[]>{
    return this._http.get<IDproduct[]>(`${baseUrlProduct}/products/category/${category}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  postProduct(data:FormData){
    return this._http.post(`${baseUrlProduct}/products`, data);

  }
  updateProduct(id: any,data: FormData):Observable<any>{
    return this._http.patch(`${baseUrlProduct}/products/${id}`, data);
  }
  deleteProduct(id:string){
    return this._http.delete(`${baseUrlProduct}/products/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
