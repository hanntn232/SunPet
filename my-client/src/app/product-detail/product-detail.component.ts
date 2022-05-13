import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model2/user';
import { DathangService } from '../service/dathang.service';
import { ProductDetailService } from '../service/product-detail.service';
import { UserService } from '../service/user.service';
declare function chuyenAnh(): any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(private _service: ProductDetailService,
    private activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _datHangService: DathangService,
    private _toastr: ToastrService
  ) { }

  public productList: any;
  public errMsg: any;
  public selectedId: string = ""

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => this.productList = data,
      error: (err) => this.errMsg = err
    });
    chuyenAnh();

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if (id != null) {
        this.selectedId = id.toString();
      }
    })

  }

  soKhopId(id1: string, id2: string) {
    if (id1 == id2)
      return true
    else
      return false
  }

  themVaoGioHang() {
    if (this._userService.kiemTraDangNhap(localStorage.getItem('token')) == false) {
      this._toastr.error("Bạn cần phải đăng nhập để thêm vào giỏ hàng", "Không thành công")
    }
    else {
      // var user = this._userService.getUserBytoken();
      // var product = this.getProductInfo(this.selectedId);
      // // if(product != "Product not found"){

      // // }
      // console.log(user);
      // console.log(product);
      var productID = this.selectedId;
      this._service.getProductList().subscribe({
        next: productList => {
          for (var i = 0; i < productList.length; i++) {
            if (productList[i].id == productID) {
              var product = productList[i];
              var token = localStorage.getItem('token');
              var customerID = "";
              this._userService.getAllUsers().subscribe(data => {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].token == token) {
                      customerID = data[i]._id
                    // console.log(user.token);
                    // console.log(token)
                    //Đang thực hiện dở
                  }
                }
                return "User not found"
              }
              )
              return;
            }
          }
          return "Product not found"
        },
        error: err => {
          return console.log(err.message)
        }
      })
      console.log("NOT")
    }
  }

  getProductInfo(productID: string) {
    this._service.getProductList().subscribe({
      next: productList => {
        for (var i = 0; i < productList.length; i++) {
          if (productList[i].id == productID) {
            return productList[i];
          }
        }
        return "Product not found"
      },
      error: err => {
        return err.message
      }
    })
  }

  // getUserBytoken() {
  //   var token = localStorage.getItem('token');
  //   var user = new User();
  //   this.getAllUsers().subscribe(data => {
  //     for (var i = 0; i < data.length; i++) {
  //       if (data[i].token == token) {
  //         user.ho = data[i].ho,
  //           user.ten = data[i].ten,
  //           user.sdt = data[i].sdt,
  //           user.matKhau = data[i].matKhau,
  //           user.role = data[i].role,
  //           user.token = data[i].token,
  //           user._id = data[i]._id,
  //           user.diaChi = data[i].diaChi
  //         console.log(user.token);
  //         console.log(token)
  //         return user;
  //       }
  //     }
  //     return "User not found"
  //   }
  //   )
  // }
}
