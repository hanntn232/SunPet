import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDproduct } from '../model/product';
import { ProductDetailService } from '../service/product-detail.service';
import { updateProduct } from '../model/updateProduct';

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
  // public productForm: any; 
  // image
  files:any;

  constructor(private _service: ProductDetailService, private _toast: ToastrService, private _formBuilder: FormBuilder) { }

  public testForm = this._formBuilder.group({
    "name": ['', [Validators.required, Validators.minLength(3)]],
    "file": ['']
  })
  
  ngOnInit(): void {
    this.getProductList();

    // this.productForm = this._formBuilder.group({
    //   "ten": [''],
    //   "giaGoc": [0],
    //   "giaBan": [0],
    //   "danhMuc": [''],
    //   "moTa": [''],
    //   "hinhAnh": ['']
    // })
  }
  submitData(form: NgForm) {
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
    const formData = new FormData();
    formData.append("files", this.files)
    const update_Product = new updateProduct();
    update_Product.product = this.product;
    update_Product.formImg = formData;
    console.log(update_Product)
    if(this.product.id !== ''){
      this._service.updateProduct(this.product.id, update_Product).subscribe(res => {
        console.log("No oke")
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          // alert("Updated sucessfully")
          this._toast.success("Cập nhật thành công", "Thành công!")
          this.onReset(form);
          this.getProductList();
        }else {
          this._toast.error("Có lỗi xảy ra", "Thất bại!")
          alert(resData.message)
        }
      })
    }
  }
  onChangeFile(event: any){
    if(event.target.files.length > 0){
      this.files = event.target.files;
      // console.log("Files: ", event.target.files)
    }
    else
    this.files = null;
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
  onDelete(id: any){
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
      this.files = event.target.files[0];
    }
    else{
      this.files=null;
    }
  }
  onSubmit(data: any){
    // console.log("Name: ", dataForm.name)
    const formData = new FormData();
    formData.append("ten", data.ten);
    formData.append("file", this.files);

    // console.log("formData: ", formData);
    for(let pair of formData.entries()){
      console.log(pair[0], pair[1]);
    }
  }
  // get name
  get nameInput(){
    return this.testForm.controls["ten"];
  }

  deleteImage(imageRemove: any){
    //Không cho phép xóa hết ảnh sản phẩm
    if(this.product.hinhAnh.length>= 1){
      this.product.hinhAnh.splice(this.product.hinhAnh.indexOf(imageRemove), 1);
    }
  }

}