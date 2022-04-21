import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../service/product-detail.service';
declare function chuyenAnh():any; 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(private _service: ProductDetailService, private activatedRoute: ActivatedRoute) { }

  public productList: any;
  public errMsg: any;
  public selectedId: string=""

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.errMsg = err
    });
    chuyenAnh();

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if(id != null){
        this.selectedId = id.toString();
      }
    })

  }
  
  soKhopId(id1: string, id2: string){
    if(id1 == id2)
    return true
    else
    return false
  }
}
