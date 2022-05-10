import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDblog } from '../model/blog';
import { BlogchitietService } from '../service/blogchitiet.service';

@Component({
  selector: 'app-admin-blogtrangchu',
  templateUrl: './admin-blogtrangchu.component.html',
  styleUrls: ['./admin-blogtrangchu.component.css']
})
export class AdminBlogtrangchuComponent implements OnInit {

  blogs: any;
  errorMessage: any;
  message: any;
  blog: IDblog = new IDblog();
  constructor(private _service: BlogchitietService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this.getBlogList();
  }
  submitData(form:NgForm) {
    // console.log("Form data:", form.value);
    // console.log("Model:", this.product)
    if (this.blog.id == '') {
      this._service.postBlog(this.blog).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res))
        if (resData.message === "success") {
          // alert("Succesfully!")
          this._toast.success("Inserted Successfully", "Success!")
          this.getBlogList();
          this.onReset();
        } else {
          this._toast.error("Inserted Failed", "Fail!")
        }
      })
    }else{
      this._service.updateBlog(this.blog.id, this.blog).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          // alert("Updated sucessfully")
          this._toast.success("Updated Successfully", "Success!")
          this.onReset(form);
          this.getBlogList();
        }else {
          alert(resData.message)
        }
      })
    }
  }
  getBlogList() {
    this._service.getBlogList().subscribe({
      next: data => this.blogs = data,
      error: err => this.errorMessage = err
    })
  }
  onEdit(data: IDblog) {
    this.blog = data;
    
    // this.onReset();
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.blog = new IDblog();
  }
  onDelete(id: any, form:NgForm){
    if(confirm("Are you sure want to delete this blog")==true){
      this._service.deleteBlog(id).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message == "successfull") {
          // alert("Delete sucessfully")
          this._toast.success("Deleted Successfully", "Success!")
          this.onReset();
          this.getBlogList();
        } else {
          alert(resData.message)
        }
      })
    }
  }

}
