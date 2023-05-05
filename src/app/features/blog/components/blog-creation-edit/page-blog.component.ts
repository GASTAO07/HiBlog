import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeBlogEnregistresService } from '../../services/liste-blog-enregistres/liste-blog-enregistres.service';
import { Blog } from '../../interfaces/blog.interface';
import { Category } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})

export class PageBlogComponent implements OnInit {
  blog: Blog;
  blogs: Blog[] = [];
  category: Category;
  categories: Category[] = [];
  isValidBlog: boolean = true;
  titlePage: string;
  textButton: string;
  selectedCategory: Category | null = null;
  filteredBlogsByCategory: { [category: string]: Blog[] } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public categoryService: CategoryService,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
  ) { }

  ngOnInit(): void {

    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.categoryService.getCategorieList();
    this.listeBlogEnregistresService.getBlogsByCategory(this.category);
    const variable = 'id';
    const id = parseInt(this.route.snapshot.queryParams[variable], 10);
    if (!!id) {
      const blogFound = this.listeBlogEnregistresService.getBlogById(id);
      if (!!blogFound) {
        this.blog = blogFound;
        this.titlePage = 'Modifier un blog';
        this.textButton = 'Enregistrer';
      } else {
        console.error('id invalide');
      }
    } else {
      this.titlePage = 'Ajouter un blog';
      this.textButton = 'Créer un blog';
      this.blog = { titre: '', description: '', category: this.category, hashtags: [] };
    }
    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.categoryService.getCategorieList();

    if (!!id) {
      const categoryFound = this.categoryService.getCategoryById(id);
      if (!!categoryFound) {
        this.category = categoryFound;
      } else {
        console.error('id invalide');
      }
    } else {
      this.titlePage = 'Ajouter une categorie';
      this.category = { label: '' };
    }
  }




  creerUneCategory(): void {
    this.categoryService.addCategories(this.category.label);
  }



  filterByCategory(): void {
    if (!this.selectedCategory) {
      this.blogs = this.listeBlogEnregistresService.getBlogList() || [];
    } else {
      this.blogs = this.listeBlogEnregistresService.getBlogsByCategory(this.selectedCategory);
    }
  }

  validateBlog(): void {
    if (!(this.blog?.titre || this.blog?.description || this.blog?.id || this.selectedCategory || this.blog.hashtags)) {
      this.isValidBlog = true;
    } else {
      this.isValidBlog = false;
    }
  }

  creerUnblog(): void {
    this.validateHashtags();
    this.validateBlog();
    this.listeBlogEnregistresService.addBlog(this.blog?.titre, this.blog?.description, this?.selectedCategory, this.blog.hashtags);
    this.router.navigate(['/blog/listedeblogs']);
  }

  submitBlogChanges(): void {
    this.validateHashtags();
    this.validateBlog();
    this.listeBlogEnregistresService.modifyBlog(this.blog?.id, this.blog?.titre, this.blog?.description, this?.selectedCategory, this.blog?.hashtags);
    this.router.navigate(['/blog/listedeblogs']);
  }

  cancelCreroredit(): void {
    this.router.navigate(['/blog/listedeblogs']);
  }

  validateHashtags(): void {
    if (this.blog.hashtags && typeof this.blog.hashtags === 'string') {
      // verifie si existe et le type string
      // forcer à any our éviter une erreur de compilation
      const tags = (this.blog.hashtags as any).split(',').map((tag: string): string => tag.trim());
      //  divise la chaîne de caractères des hashtags
      // map chaque element et trim() supprime les espaces
      this.blog.hashtags = tags.slice(0, 5);
      // limiter les hashtags à 5
    }
  }

}
