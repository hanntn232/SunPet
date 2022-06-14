import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogChiTietComponent } from './blog-chi-tiet/blog-chi-tiet.component';
import { BlogtrangchuComponent } from './blogtrangchu/blogtrangchu.component';
import { ContactComponent } from './contact/contact.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DathangComponent } from './dathang/dathang.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ProductComponent } from './product/product.component';
import { ThongtinfooterComponent } from './thongtinfooter/thongtinfooter.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { XemthongtinComponent } from './xemthongtin/xemthongtin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { AdminBlogtrangchuComponent } from './admin-blogtrangchu/admin-blogtrangchu.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DonhangAdminComponent } from './donhang-admin/donhang-admin.component';
import { ChitietdonhangAdminComponent } from './chitietdonhang-admin/chitietdonhang-admin.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog/:id', component: BlogChiTietComponent},
  {path: 'blog', component: BlogtrangchuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dangky', component: DangkyComponent},
  {path: 'dangnhap', component: DangnhapComponent},
  {path: 'dathang', component: DathangComponent},
  {path: 'giohang', component: GiohangComponent},
  {path: 'sanpham', component: ProductComponent},
  {path: 'sanpham/:id', component: ProductDetailComponent},
  {path: 'thongtinfooter', component: ThongtinfooterComponent},
  {path: 'xemthongtin', component: XemthongtinComponent},
  {path: 'admin/sanpham', component: ProductAdminComponent},
  {path: 'admin/blogs', component: AdminBlogtrangchuComponent},
  {path: 'admin/blogs/:id', component: BlogChiTietComponent},
  {path: 'admin/dashboard', component: AdmindashboardComponent},
  {path: 'admin/donhang', component: DonhangAdminComponent},
  {path: 'admin/donhang/:id', component: ChitietdonhangAdminComponent},
  {path: 'admin/chitietdonhang', component: ChitietdonhangAdminComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
