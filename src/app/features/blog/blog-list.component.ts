import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeBlogEnregistresService } from './services/liste-blog-enregistres/liste-blog-enregistres.service';
import { Blog } from './interfaces/blog.interface';
import { LoginValidationService } from 'src/app/core/auth/services/login-validation.service/login-validation.service';
import { User } from 'src/app/features/user/interfaces/user.interface';
import { UserService } from 'src/app/core/auth/services/user.service/user.service';
import { Category } from './interfaces/category.interface';
import { CategoryService } from './services/category/category.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {
  user: User;
  blogs: Blog[] = [];
  categories: Category[] = [];
  selectedCategory: Category;
  isValidBlog: boolean = true;
  searchQuery: string = '';
  titlePage: string = 'Liste de blogs';
  showFullDescription : boolean = false;

  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public categoryService: CategoryService,
    public loginValidationService: LoginValidationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.user = {
        nom: '',
        prenom: '',
        email: '',
        avatarUrl: '',
        motdepasse: { pwd: '', confirmPwd: '' }
      };
    }

    const currentUserId = Number(localStorage.getItem('currentUserId'));
    const currentUser: User = this.userService.getUserById(currentUserId);
    if (currentUser === undefined) {
      return;
    } else {
      this.user = currentUser;
    }
    this.refreshBlogs();

    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.categoryService.getCategorieList();
  }

  toggleFullDescription() : void {
    this.showFullDescription = !this.showFullDescription;
  }

  addCategorie(): void {
    this.router.navigate(['/blog/create-categories']);
  }

  filterByCategory(): void {
    if (this.selectedCategory) {
      this.blogs = this.listeBlogEnregistresService.getBlogList().filter(
        (blog: Blog): any => blog.category === this.selectedCategory
      );
    } else {
      this.refreshBlogs();
    }
  }

  modifyTheBlog(id: number): void {
    this.router.navigate(['/blog/pageblog'], { queryParams: { id: id } });
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.categoryService.getCategorieList();
  }

  addNewBlog(): void {
    this.router.navigate(['/blog/pageblog']);
  }

  duplicateBlog(id: number): void {
    this.listeBlogEnregistresService.duplicateBlog(id);
  }

  deleteBlog(id: number): void {
    const confirmed = confirm('Vous êtes sûr de vouloir effacer ce blog ? ');
    if (confirmed) {
      this.listeBlogEnregistresService.deleteBlog(id);
      this.refreshBlogs();
    }
  }

  search(): void {
    if (this.searchQuery) {
      this.blogs = this.listeBlogEnregistresService.getBlogList().filter(
        (blog: Blog): boolean =>
          blog.titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          blog.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.refreshBlogs();
    }
  }
}
