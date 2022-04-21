import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','./grid.css']
})
export class ProductComponent implements OnInit {
  productList: any;
  errMsg: any;
  selectedId: any;

  constructor(private _service: ProductDetailService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.errMsg = err
    })

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if(id != null){
        this.selectedId = id.toString();
      }
    })
  }

  onSelected(data: any): void{
    this.router.navigate(['/sanpham', data.id])
  }
}
