import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeBlogEnregistresService } from '../../services/liste-blog-enregistres.service';
import { Blog } from '../../interfaces/blog.interface';
import { LoginValidationService } from 'src/app/core/auth/services/login-validation.service';
import { User } from 'src/app/features/user/interfaces/user.interface';
import { UserService } from 'src/app/core/user/services/user.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  isValidBlog: boolean = true;
  user: User;
  searchQuery: string = '';
  titrePage: string = 'Liste de blogs';
  filteredBlogsByCategory: { [category: string]: Blog[] } = {};
  categories: string[] = []; // Liste des catégories uniques des blogs
  selectedCategory: string = ''; // Catégorie sélectionnée dans le sélecteur
  fullDescription: string = '';

  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // Récupérer les blog posts avec le service
    this.blogs = this.listeBlogEnregistresService.getBlogList();

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
    // Si currentUser est undefined, renvoyer une erreur
    if (currentUser === undefined) {
      return;
    } else {
      this.user = currentUser;
    }
    this.refreshBlogs();
  }

  modifyTheBlog(id: number): void {
    this.router.navigate(['/blog/pageblog'], { queryParams: { id: id } });
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
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
