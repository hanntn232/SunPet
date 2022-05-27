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
  postProduct(data:IDproduct){
    return this._http.post<IDproduct[]>(`${baseUrlProduct}/products`, data);
  }
  updateProduct(id: any,update_Product: updateProduct):Observable<any>{
    return this._http.patch(`${baseUrlProduct}/products/${id}`, update_Product);
  }
  deleteProduct(id:string){
    return this._http.delete(`${baseUrlProduct}/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
