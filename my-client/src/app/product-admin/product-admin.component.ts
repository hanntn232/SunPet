import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDproduct } from '../model/product';
import { ProductDetailService } from '../service/product-detail.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products: any;
  errorMessage: any;
  message: any;
  product: IDproduct = new IDproduct();
  constructor(private _service: ProductDetailService
    , private _toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.getProductList();
  }
  submitData(form:NgForm) {
    // console.log("Form data:", form.value);
    // console.log("Model:", this.product)
    if (this.product.id == '') {
      this._service.postProduct(this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res))
        if (resData.message === "success") {
          // alert("Succesfully!")
          // this._toast.success("Inserted Successfully", "Success!")
          this.getProductList();
          this.onReset();
        } else {
          // this._toast.error("Inserted Failed", "Fail!")
        }
      })
    }else{
      this._service.updateProduct(this.product.id, this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          // alert("Updated sucessfully")
          // this._toast.success("Updated Successfully", "Success!")
          this.onReset(form);
          this.getProductList();
        }else {
          alert(resData.message)
        }
      })
    }
  }
  getProductList() {
    this._service.getProductList().subscribe({
      next: data => this.products = data,
      error: err => this.errorMessage = err
    })
  }
  onEdit(data: IDproduct) {
    this.product = data;
    
    // this.onReset();
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.product = new IDproduct();
  }
  onDelete(id: any){
      this._service.deleteProduct(id).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message == "success") {
          // alert("Delete sucessfully")
          // this._toast.success("Deleted Successfully", "Success!")
          this.onReset();
          this.getProductList();
        } else {
          alert(resData.message)
        }
      })
  }

}
