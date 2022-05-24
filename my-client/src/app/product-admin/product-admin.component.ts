import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
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
  // image
  file:any;
  public testForm = this._formBuilder.group({
    "name": ['', [Validators.required, Validators.minLength(3)]],
    "file": ['']
  })
  constructor(private _service: ProductDetailService, private _toast: ToastrService, private _formBuilder: FormBuilder) { }

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
          this._toast.success("Thêm sản phẩm thành công", "Thành công!")
          this.getProductList();
          this.onReset();
        } else {
          this._toast.error("Thêm sản phẩm thất bại", "Thất bại!")
        }
      })
    }
  }
  updateForm(form:NgForm){
    if(this.product.id !== ''){
      this._service.updateProduct(this.product.id, this.product).subscribe(res => {
        console.log("No oke")
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          // alert("Updated sucessfully")
          this._toast.success("Cập nhật thành công", "Thành công!")
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
    console.log("Okeeee")
    // this.onReset();
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.product = new IDproduct();
  }
  onDelete(id: any,form:NgForm){
      this._service.deleteProduct(id).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message == "success") {
          // alert("Delete sucessfully")
          this._toast.success("Xóa sản phẩm thành công", "Thành công!")
          this.onReset();
          this.getProductList();
        } else {
          alert(resData.message)
        }
      })
  }

  // upload image
  
  // image file
  onSelect(event:any){
    if(event.target.files.length > 0){
      // console.log("File info: ", event.target.files[0])
      this.file = event.target.files[0];
    }
    else{
      this.file=null;
    }
  }
  onSubmit(data: any){
    // console.log("Name: ", dataForm.name)
    const formData = new FormData();
    formData.append("ten", data.ten);
    formData.append("file", this.file);

    // console.log("formData: ", formData);
    for(let pair of formData.entries()){
      console.log(pair[0], pair[1]);
    }
  }
  // get name
  get nameInput(){
    return this.testForm.controls["ten"];
  }

}