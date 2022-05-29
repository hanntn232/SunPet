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
  blogList: any;
  blogs: any;
  errorMessage: any;
  message: any;
  blog: IDblog = new IDblog();
  files = null;
  constructor(private _service: BlogchitietService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this.getBlogList();

    this._service.getBlogList().subscribe({
      next: (data) => this.blogList = data,
      error: (err) => this.message = err
    });
  }
  taoBlogID() {
    // this._service.getBlogList().subscribe({
    //   next: (data) => this.blogList = data,
    //   error: (err) => this.message = err
    // });
    // const blogLength = this.blogList.length;
    // return (blogLength + 1).toString();
    var id = '';
    //Lấy miliseconds ở thời điểm hiện tại
    id = Math.random().toString().substring(2, 8) + "_" + String(new Date().getTime());
    return id;
  }
  taoBlogDate(){
    var today = new Date();
    var dd = today.getDate().toString();
    var mm = (today.getMonth()+1).toString(); //January is 0!
    var yyyy = (today.getFullYear()).toString();
    if(parseInt(dd)<10){dd='0'+dd} 
    if(parseInt(mm)<10){mm='0'+mm} 
    return dd+'/'+mm+'/'+yyyy;
  }
  submitData() {
    // console.log("Form data:", form.value);
    // console.log("Model:", this.product)
    if (this.blog.id == '') {
      this.blog.id = this.taoBlogID();
      this.blog.date = this.taoBlogDate();
      const formData = new FormData();
      if (this.files != null) {
        formData.append("files", this.files)
      }
      else {
        formData.append("files", '')
      }
      formData.append("id", this.blog.id)
      formData.append("content", this.blog.content)
      formData.append("image", this.blog.image)
      formData.append("date", this.blog.date)
      formData.append("title", this.blog.title)
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ': ' + pair[1]);
      // }
      // console.log(this.files)
      this._service.postBlog(formData).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res))
        if (resData.message === "successfull") {
          // alert("Succesfully!")
          this._toast.success("Thêm bài viết thành công", "Thành công!")
          this.closeAddForm()
          this.getBlogList();
          this.onReset();
        } else {
          this._toast.error(resData.message, "Thất bại!");
        }
      })
    }
  }


  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      this.files = event.target.files[0];
      // console.log("Files: ", this.files)
    }
    else
      this.files = null;
  }
  updateBlog() {
    const formData = new FormData();
    if (this.files != null) {
      formData.append("files", this.files)
    }
    else {
      formData.append("files", '')
    }
    formData.append("id", this.blog.id)
    formData.append("content", this.blog.content)
    formData.append("date", this.blog.date)
    formData.append("image", this.blog.image)
    formData.append("title", this.blog.title)
    console.log(this.files)
    // for(let pair of formData.entries()){
    //   console.log(pair[0]+': '+pair[1]);
    // }
    if (this.blog.id !== '') {
      this._service.updateBlog(this.blog.id, formData).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "successfull") {
          // alert("Updated sucessfully")
          this._toast.success("Cập nhật bài viết thành công", "Thành công!")
          this.closeEditForm();
          this.getBlogList();
        } else {
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
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.blog = new IDblog();
  }
  onDelete(id: any) {
    console.log(id);  
    this._service.deleteBlog(id).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if (resData.message == "successfull") {
        // alert("Delete sucessfully")
        this._toast.success("Xóa bài viết thành công", "Thành công!")
        this.onReset();
        this.closeDeleteForm();
        this.closeDeleteSucc();
        this.getBlogList();
      } else {
        this._toast.error(resData.message, "Thất bại!")
      }
    })
  }

  openEditForm(blog: IDblog) {
    // this.blog.id = blog.id;
    // this.blog.content = blog.content;
    // this.blog.date = blog.date;
    // this.blog.image = blog.image;
    // this.blog.title = blog.title
    this.blog = blog;
    const editForm = document.getElementById('formEditBlog')
    if (editForm != null) {
      editForm.style.visibility = 'visible'
      editForm.style.opacity = '100'
    }
  }
  closeEditForm() {
    const editForm = document.getElementById('formEditBlog')
    if (editForm != null) {
      editForm.style.visibility = 'hidden'
      editForm.style.opacity = '0'
    }
  }

  openAddForm() {
    this.blog = new IDblog();
    const editForm = document.getElementById('formAddBlog')
    if (editForm != null) {
      editForm.style.visibility = 'visible'
      editForm.style.opacity = '100'
    }
  }
  closeAddForm() {
    const editForm = document.getElementById('formAddBlog')
    if (editForm != null) {
      editForm.style.visibility = 'hidden'
      editForm.style.opacity = '0'
    }
  }

  openDeleteForm(blog: IDblog) {
    this.blog = blog;
    const editForm = document.getElementById('formDeleteBlog')
    if (editForm != null) {
      editForm.style.visibility = 'visible'
      editForm.style.opacity = '100'
    }
  }
  closeDeleteForm() {
    const editForm = document.getElementById('formDeleteBlog')
    if (editForm != null) {
      editForm.style.visibility = 'hidden'
      editForm.style.opacity = '0'
    }
  }

  closeDeleteSucc() {
    const editForm = document.getElementById('formDeleleSucc')
    if (editForm != null) {
      editForm.style.visibility = 'hidden'
      editForm.style.opacity = '0'
    }
  }
}
