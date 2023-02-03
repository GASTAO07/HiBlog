import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  id: number;
  isValidBlog: boolean = true;

  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    this.refreshBlogs();
  }

  modifyBlog(id: number, titre: string, description: string): void {
    this.router.navigate(['pageblog'], { queryParams: { id: id, titre: titre, description: description, isCreation: false } });
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
  }

  addNewBlog(): void {
    this.router.navigate(['pageblog'], { queryParams: { isCreation: true } });
  }

  deleteBlog(id: number): void {
    this.listeBlogEnregistresService.deleteBlog(id);
    this.refreshBlogs();
  }
}
