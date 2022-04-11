import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../service/product-detail.service';
declare function chuyenAnh():any; 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(private _service: ProductDetailService) { }

  public productList: any;
  public errMsg: any;

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.errMsg = err
    });
    chuyenAnh();
  }
}
