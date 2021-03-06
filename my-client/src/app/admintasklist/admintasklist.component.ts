import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Todo } from '../model/todo';
import { ToastrService } from 'ngx-toastr';
import { TasklistService } from '../service/tasklist.service';

@Component({
  selector: 'app-admintasklist',
  templateUrl: './admintasklist.component.html',
  styleUrls: ['./admintasklist.component.css']
})
export class AdmintasklistComponent implements OnInit {

  todos: any;
  todo: Todo = new Todo();
  errorMessage: string = '';

  constructor(private _service: TasklistService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this.getAllTodoItems();
  }

  getAllTodoItems() {
    this._service.getTodoList().subscribe({
      next: (data) => (this.todos = data),
      error: (err) => (this.errorMessage = err),
    });
  }

  taoTaskID() {
    var id = '';
    id = Math.random().toString().substring(2, 9) + "_" + String(new Date().getTime());
    return id;
  }

  submitData(form: NgForm) {
    // console.log("Form data: ",  form.value);
    console.log('Model: ', this.todo);
    // Insert todoitems
    if (this.todo.id == '') {
      this.todo.id = this.taoTaskID();
      this._service.postTodo(this.todo).subscribe((res) => {
        let resData = JSON.parse(JSON.stringify(res)); 
        if (resData.message === 'Success') {
          // alert('Success!');
          this._toast.success("Inserted successfully!", "Success!")
          this.getAllTodoItems();
          this.onReset(form);
          setTimeout(() => window.location.reload(),1000)
        } else {
          this._toast.error(resData.message, 'Fail!')
          // alert('Fail!');
        }
      });
    }
    //  Update todo items
    else {
      this._service
        .updateTodo(this.todo.id, this.todo)
        .subscribe((res) => {
          let resData = JSON.parse(JSON.stringify(res));
          if (resData.message === 'Success') {
            // alert('Update Successfully!');
            this._toast.success("Updated successfully!", "Success!")
            this.onReset(form);
            setTimeout(() => window.location.reload(),1000)
            this.getAllTodoItems();
          } else {
            this._toast.error(resData.message, 'Fail!')
          }
        });
    }
  }
  // editData(form: NgForm){
  //   if (this.todo.id == ''){
  //     this._service
  //     .updateTodo(this.todo.id, this.todo)
  //     .subscribe((res) => {
  //       let resData = JSON.parse(JSON.stringify(res));
  //       if (resData.message === 'Success') {
  //         // alert('Update Successfully!');
  //         this._toast.success("Updated successfully!", "Success!")
  //         this.onReset(form);
  //         setTimeout(() => window.location.reload(),1000)
  //         this.getAllTodoItems();
  //       } else {
  //         this._toast.error(resData.message, 'Fail!')
  //       }
  //     });
  //   }
  // }

  onEdit(data: Todo) {
    this.todo = data;
  }

  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.todo = new Todo();
  }

  onDelete(id: any, form: NgForm) {
    if (confirm('Are you sure you want to delete this task?') == true) {
      this._service.deleteTodo(id).subscribe((res) => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === 'Success') {
          // alert('Delete Successfully!');
          this._toast.success("Deleted successfully!", "Success!", {
            timeOut: 2000
          })
          this.onReset(form);
          this.getAllTodoItems();
        } else {
          alert(resData.message);
        }
      });
      this.onReset(form);
    }
  }

}
