import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { IDproduct } from '../model/product';
import { Product } from '../model2/product';
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

  getProductList(): Observable<Product[]>{
    return this._http.get<Product[]>(`${baseUrlProduct}/products`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  postProduct(data:IDproduct){
    return this._http.post<IDproduct[]>(`${baseUrlProduct}/products`, data);
  }
  updateProduct(id:string, newdata:IDproduct):Observable<any>{
    return this._http.patch(`${baseUrlProduct}/products`, newdata);
  }
  deleteProduct(id:string){
    return this._http.delete(`${baseUrlProduct}/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }

  // getProductInfo(productID: string){
  //   this.getProductList().subscribe({
  //     next: productList => {
  //       for(var i=0; i<productList.length; i++){
  //         if(productList[i]._id == productID){
  //           return productList[i];
  //         }
  //       }
  //       return "Product not found"
  //     },
  //     error: err => {
  //       return err.message
  //     }
  //   })
  // }
}
