import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../service/product-detail.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','./grid.css']
})
export class ProductComponent implements OnInit {
  productList: any;
  errMsg: any;

  constructor(private _service: ProductDetailService) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.errMsg = err
    })
  }

}
