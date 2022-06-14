import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';
import { NgxPaginationModule,} from 'ngx-pagination';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','./grid.css']
})
export class ProductComponent implements OnInit {
  productList: any;
  errMsg: any;
  selectedId: any;
  t: number = 1;
  page: number = 1;
  total: number = 50;

  constructor(private _service: ProductDetailService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    // this._service.getProductListByCategory("ThucAnChoMeo").subscribe({
      
    //   next: (data) => this.productList =data,
    //   error: (err) => this.errMsg = err
    // })
    this.hienThiTheoDanhMuc("")
    

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   let id = params.get("id");
    //   if(id != null){
    //     this.selectedId = id.toString();
    //   }
    // })
    
  }

  getNavigation(id: any){
    this.router.navigate(['sanpham/', id])
  }
  onAlert(id: String){
    alert(id)
    // this._service.getProductById(id).subscribe(product => {
    //   this.productDetail = product
    // })
  }

  hienThiTheoDanhMuc(cate: string) {
    if(cate === "") {
      this._service.getProductList().subscribe({
        next: (data) => this.productList = data,
        error: (err) => this.errMsg = err
      })
    } else {
      this._service.getProductListByCategory(cate).subscribe({
        next: (data) => {this.productList =data},
        error: (err) => this.errMsg = err
      })
      // console.log(this.productList)
    }
    
  }
}
