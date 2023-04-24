import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeBlogEnregistresService } from '../../services/liste-blog-enregistres.service';
import { Blog } from '../../interfaces/blog.interface';
import { LoginValidationService } from 'src/app/core/auth/services/login-validation.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  blog: Blog;
  blogs: Blog[] = [];
  categorie: Category;
  categories: Category[] = [];
  isValidBlog: boolean = true;
  titrePage: string;
  textButton: string;
  selectedCategory: Category | null = null ;
  filteredBlogsByCategory: { [category: string]: Blog[] } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    private loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {

    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.listeBlogEnregistresService.getCategorieList();
    this.listeBlogEnregistresService.getBlogsByCategory(this.categorie);

    // eslint-disable-next-line dot-notation
    const id = parseInt(this.route.snapshot.queryParams['id'], 10);
    if (!!id) {
      const blogFound = this.listeBlogEnregistresService.getBlogById(id);
      if (!!blogFound) {
        this.blog = blogFound;
        this.titrePage = 'Modifier un blog';
        this.textButton = 'Enregistrer';
      } else {
        console.error('id invalide');
      }
    } else {
      this.titrePage = 'Ajouter un blog';
      this.textButton = 'Créer un blog';
      this.blog = { titre: '', description: '', category: this.categorie };
    }
  }

  filterByCategory(): void {
    if (!this.selectedCategory) {
      this.blogs = this.listeBlogEnregistresService.getBlogList() || [];
    } else {
      this.blogs = this.listeBlogEnregistresService.getBlogsByCategory(this.selectedCategory);
    }
  }

  validateBlog(): void {
    if (!(this.blog?.titre || this.blog?.description || this.blog?.id || this.selectedCategory)) {
      this.isValidBlog = true;
    } else {
      this.isValidBlog = false;
    }
  }

  creerUnblog(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.addBlog(this.blog?.titre, this.blog?.description, this?.selectedCategory);
    this.router.navigate(['/blog/listedeblogs']);
  }

  submitBlogChanges(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.modifyBlog(this.blog?.id, this.blog?.titre, this.blog?.description, this.selectedCategory);
    this.router.navigate(['/blog/listedeblogs']);
  }

  cancelCreroredit(): void {
    this.router.navigate(['/blog/listedeblogs']);
  }
}
