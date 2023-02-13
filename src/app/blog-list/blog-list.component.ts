import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { AuthService } from '../service/auth-service/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  isValidBlog: boolean = true;
  user: string;
  User : string;
  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
    private auth : AuthService,
  ) { }

  ngOnInit(): void {
    this.refreshBlogs();
    this.user = this.auth.getUser();
    console.log('user : ', this.user);
  }

  modifyTheBlog(id: number): void {
    this.router.navigate(['pageblog'], { queryParams: { id: id } });
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
  }

  addNewBlog(): void {
    this.router.navigate(['pageblog']);
  }

  deleteBlog(id: number): void {
    this.listeBlogEnregistresService.deleteBlog(id);
    this.refreshBlogs();
  }
}
