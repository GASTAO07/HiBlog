import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { Blog } from '../interfaces/blog.interface';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { User } from '../interfaces/user.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  isValidBlog: boolean = true;
  user: User;

  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    const currentUserId = Number(localStorage.getItem('currentUserId'));
    const currentUser: User = this.userservice.getUserById(currentUserId);
    // Si currentUser est undefined, renvoyer une erreur
    if (currentUser === undefined) {
      console.error('User introuvable');
    } else {
      this.user = currentUser;
    }
    this.refreshBlogs();
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
