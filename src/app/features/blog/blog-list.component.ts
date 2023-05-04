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
  showFullDescription: boolean = false;
  searchHashtags: string = '';

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

  toggleFullDescription(): void {
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

  searchByHashtag(): void {
    if (this.searchHashtags) {
      // searchHashtags le mot qui a été choisi,
      // split pour séparer les mots-clés par des espaces
      // this.searchHashtags.split(' ') crée un tableau de mots-clés en utilisant les espaces pour séparer
      // map parcours chaque le tableu et avectolowercase met en miniscule et crée un nouveau tableau
      const searchTags = this.searchHashtags.split(' ').map((tag: string): string => tag.toLowerCase());
      this.blogs = this.listeBlogEnregistresService.getBlogList().filter(
        // paramètre blog de type Blog et retourne un booléen (true ou false)
        (blog: Blog): boolean =>
          // si hashtags du blog est bien un tableau
          Array.isArray(blog.hashtags) &&
          // some() pour s'assurer qu'au moins un hashtag du blog est présent dans le tableau de mots-clés de recherche (searchTags).
          blog.hashtags.some((tag: string): boolean => searchTags.includes(tag.toLowerCase()))
        // tag est un des hashtags qui a été divisé au debut
        // tag de type string (un hashtag individuel du blog) et retourne un booléen.
        // avec includes si le hashtag est présent dans le tableau
      );
      // Et ces blogs sont inclus dans le tableu filtreée s'ils repondent à ces deux conditions
    } else {
      this.refreshBlogs();
    }
  }

}
