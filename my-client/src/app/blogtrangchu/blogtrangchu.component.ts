import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogchitietService } from '../service/blogchitiet.service';
declare function layDuLieuTextTuHTML(htmlString: string): any;
declare function mangBlog(mang: any, start: number, end: number): any;

@Component({
  selector: 'app-blogtrangchu',
  templateUrl: './blogtrangchu.component.html',
  styleUrls: ['./blogtrangchu.component.css']
})
export class BlogtrangchuComponent implements OnInit {
  blogList: any;
  errMsg: any;
  selectedId: any;

  constructor(private _service: BlogchitietService, private router: Router) { }

  ngOnInit(): void {
    this._service.getBlogList().subscribe({
      next: (data) => this.blogList = data,
      error: (err) => this.errMsg = err
    });
  }
  layDuLieuTextTuHTML2(htmlString: string){
    var text = layDuLieuTextTuHTML(htmlString);
    return text;
  }

  mangBlog2(mang: any, start: number, end: number){
    return mangBlog(mang, start, end)
  }

  onSelected(data: any): void{
    this.router.navigate(['/blog', data.id])
  }
}
