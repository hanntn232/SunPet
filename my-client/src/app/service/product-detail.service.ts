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
    
  }

  getProductList(): Observable<Product[]>{
    return this._http.get<Product[]>(`${baseUrlProduct}/products`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
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
