import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDproduct } from '../model/product';
import { Product } from '../model2/product';
import { ProductDetailService } from '../service/product-detail.service';
// declare function clearDataChange(id: string): any;

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
  files: any;

  constructor(private _service: ProductDetailService, private _toast: ToastrService, private _formBuilder: FormBuilder) { }

  public testForm = this._formBuilder.group({
    "name": ['', [Validators.required, Validators.minLength(3)]],
    "file": ['']
  })

  ngOnInit(): void {
    this.getProductList();
    // clearDataChange('exampleModalCenter');


    // this.productForm = this._formBuilder.group({
    //   "ten": [''],
    //   "giaGoc": [0],
    //   "giaBan": [0],
    //   "danhMuc": [''],
    //   "moTa": [''],
    //   "hinhAnh": ['']
    // })
  }
  submitData() {
    this.product.id = this.taoProductID();
    const formData = new FormData();
    if (this.files != null) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i])
      }
    }
    else {
      formData.append("files", '')
    }
    formData.append("id", this.product.id)
    formData.append("ten", this.product.ten)
    formData.append("giaGoc", this.product.giaGoc.toString())
    formData.append("giaBan", this.product.giaBan.toString())
    formData.append("moTa", this.product.moTa)
    formData.append("danhMuc", this.product.danhMuc)
    formData.append("hinhAnh", this.product.hinhAnh)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ' , ' + pair[1])
    }
    this._service.postProduct(formData).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res))
      if (resData.message === "success") {
        // alert("Succesfully!")
        this._toast.success("Thêm sản phẩm thành công", "Thành công!")
        this.getProductList();
        this.onReset();
      } else {
        this._toast.error(resData.message, "Thất bại!")
      }
    })
  }
  updateForm(form: NgForm) {
    const formData = new FormData();
    if (this.files != null) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i])
      }
    }
    else {
      formData.append("files", '')
    }
    formData.append("id", this.product.id)
    formData.append("ten", this.product.ten)
    formData.append("giaGoc", this.product.giaGoc.toString())
    formData.append("giaBan", this.product.giaBan.toString())
    formData.append("moTa", this.product.moTa)
    formData.append("danhMuc", this.product.danhMuc)
    formData.append("hinhAnh", this.product.hinhAnh)
    // const update_Product = new updateProduct();
    // update_Product.product = this.product;
    // update_Product.formImg = formData;
    // console.log(formData)
    // for(let pair of formData.entries()){
    //   console.log(pair[0]+' , '+ pair[1] )
    // }

    if (this.product.id !== '') {
      this._service.updateProduct(this.product.id, formData).subscribe(res => {
        // console.log("No oke")
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message == "Success") {
          // alert("Updated sucessfully")
          this._toast.success("Cập nhật thành công", "Thành công!")
          this.onReset(form);
          this.getProductList();
        } else {
          this._toast.error("Có lỗi xảy ra", "Thất bại!")
          alert(resData.message)
        }
      })
    }
  }
  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      this.files = event.target.files;
      console.log("Files: ", this.files)
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
    // console.log("Okeeee")
    // this.onReset();
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.product = new IDproduct();
  }
  onDelete(id: any) {
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
  onSelect(event: any) {
    if (event.target.files.length > 0) {
      // console.log("File info: ", event.target.files[0])
      this.files = event.target.files;
    }
    else {
      this.files = null;
    }
  }
  // onSubmit(data: any) {
  //   // console.log("Name: ", dataForm.name)
  //   const formData = new FormData();
  //   formData.append("ten", data.ten);
  //   formData.append("file", this.files);

  //   // console.log("formData: ", formData);
  //   // for (let pair of formData.entries()) {
  //   //   console.log(pair[0], pair[1]);
  //   // }
  // }
  // get name
  get nameInput() {
    return this.testForm.controls["ten"];
  }

  deleteImage(imageRemove: any) {
    //Không cho phép xóa hết ảnh sản phẩm
    if (this.product.hinhAnh.length > 1) {
      this.product.hinhAnh.splice(this.product.hinhAnh.indexOf(imageRemove), 1);
    }
  }

  addProduct() {
    this.product = new Product();
    this.files = null;
  }

  taoProductID() {
    var id = '';
    //Lấy miliseconds ở thời điểm hiện tại
    id = Math.random().toString().substring(2, 10) + "_" + String(new Date().getTime());
    return id;
  }

}