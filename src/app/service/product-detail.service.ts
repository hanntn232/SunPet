import { Injectable } from '@angular/core';
import { Observable, retry, throwError, catchError } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { IDproduct } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  public urlProduct: string="assets/data/product.json"
  constructor(private _http: HttpClient) { 
  }
  getProductList(): Observable<IDproduct[]>{
    return this._http.get<IDproduct[]>(this.urlProduct)
  }
}
