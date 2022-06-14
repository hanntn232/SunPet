import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../model/cart';
import { User } from '../model/user';
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
    private router: Router,
    private _userService: UserService,
    private _datHangService: DathangService,
    private _toastr: ToastrService
  ) { }

  public productList: any;
  public productDetail: any;
  public productID: any;
  public errMsg: any;
  public selectedId: string = ""
  public quantity = 1;

  ngOnInit(): void {
    // this._service.getProductList().subscribe({
    //   next: (data) => this.productList = data,
    //   error: (err) => this.errMsg = err
    // });

    chuyenAnh();
    this.productID = this.activatedRoute.snapshot.params['id'];
    this.loadProductDetail(this.productID);
    

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if (id != null) {
        this.selectedId = id.toString();
      }
    })

  }

  navigation(id: String) {
    this.router.navigate(['/sanpham',id]);
  }

  loadProductDetail(id: String) {
    this._service.getProductById(id).subscribe(product => {
      this.productDetail = product
    })
  }

  soKhopId(id1: string, id2: string) {
    if (id1 == id2)
      return true
    else
      return false
  }

  addCart() {
    // Kiểm tra đăng nhập
    if(this._userService.kiemTraDangNhap(localStorage.getItem('token')) == false) {
      this._toastr.error("Bạn cần phải đăng nhập để thêm vào giỏ hàng", "Không thành công")
    } else {
      var productID = this.selectedId;
      var token = localStorage.getItem('token');
      this._userService.getUserBytoken
    }
  }


  themVaoGioHang() {
    if (this._userService.kiemTraDangNhap(localStorage.getItem('token')) == false) {
      this._toastr.error("Bạn cần phải đăng nhập để thêm vào giỏ hàng", "Không thành công")
    }
    else {
      var productID = this.selectedId;
      // alert(productID)
      var cart = new Cart();
      var token = localStorage.getItem('token');
      this._userService.getAllUsers().subscribe({
        next: users => {
          var countToken = 0;
          for (let i = 0; i < users.length; i++) {
            if (token == users[i].token) {
              countToken = 1;
              // console.log("token: " + token + "; " + "user[i].token: " + users[i].token)
              var customerID = users[i]._id;
              this._userService.getAllCarts().subscribe({
                next: carts => {
                  var countCart = 0;
                  for (let i = 0; i < carts.length; i++) {
                    //Nếu như khách hàng này đã có ID giỏ hàng rồi --> update giỏ hàng
                    if (customerID == carts[i].customerID) {
                      countCart = 1;
                      cart = carts[i];
                      var count = 0;
                      //Xét danh sách sản phẩm trong giỏ hàng của KH đã có sản phẩm muốn thêm hay chưa
                      for (let i = 0; i < cart.productList.length; i++) {
                        if (productID == cart.productList[i].productID) {
                          //Tăng số lượng sản phẩm trong giỏ hàng
                          cart.productList[i].quantity += this.quantity;
                          this._userService.updateCart(cart._id, cart).subscribe({
                            next: res => {
                              let resData = JSON.parse(JSON.stringify(res));
                              if (resData.message == "success") {
                                // alert("success")
                                this._toastr.success("Đã thêm sản phẩm vào giỏ hàng", "Thành công!")
                              }
                              else {
                                this._toastr.error("Có lỗi xảy ra khi thêm vào giỏ hàng", "Thất bại")
                                console.log(res.message)
                              }
                            }
                          });
                          count = 1;
                          // this._toastr.success("Đã thêm sản phẩm vào giỏ hàng 3", "Thành công!")
                          break;
                        }
                      }
                      if (count == 0) {
                        //Nếu không có sản phẩm trong giỏ hàng thì sẽ thêm mới
                        cart.productList.push({
                          productID: productID,
                          quantity: this.quantity
                        })
                        this._userService.updateCart(cart._id, cart).subscribe({
                          next: res => {
                            let resData = JSON.parse(JSON.stringify(res));
                            if (resData.message == "success") {
                              this._toastr.success("Đã thêm sản phẩm vào giỏ hàng", "Thành công!")
                            }
                            else {
                              this._toastr.error("Có lỗi xảy ra khi thêm vào giỏ hàng", "Thất bại")
                            }
                          }
                        })
                        break;
                      }
                    }
                  }
                  if (countCart == 0) {
                    //Nếu khách hàng chưa có dữ liệu giỏ hàng từ trước --> Tạo giỏ hàng mới cho KH với SP và Số lượng khách hàng muốn add to shopping cart
                    cart.customerID = customerID;
                    cart.productList[0] = {
                      productID: productID,
                      quantity: this.quantity
                    };
                    this._userService.postCart(cart).subscribe({
                      next: res => {
                        let resData = JSON.parse(JSON.stringify(res));
                        if (resData.message == "success") {
                          // alert("success")
                          this._toastr.success("Đã thêm sản phẩm vào giỏ hàng", "Thành công!")
                        }
                        else {
                          // console.log(cart);
                          // console.log(res.message)
                          this._toastr.error("Có lỗi xảy ra khi thêm vào giỏ hàng", "Thất bại")
                        }
                      }
                    })
                  }
                }
              })
            }
          }
          if (countToken == 0) {
            console.log("Token không hợp lệ !!!");
            // return "Token không hợp lệ !!!"
          }
        }
      })
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
