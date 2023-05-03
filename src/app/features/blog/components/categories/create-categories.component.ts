import { Component } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { ListeBlogEnregistresService } from '../../services/liste-blog-enregistres/liste-blog-enregistres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../interfaces/blog.interface';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  blog: Blog;
  blogs: Blog[] = [];
  categories: Category[] = [];
  category: Category;
  titlePage: string;

  constructor(
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.categoryService.getCategorieList();
    const variable   = 'id';
    const id = parseInt(this.route.snapshot.queryParams[variable], 10);
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
    this.router.navigate(['/blog/listedeblogs']);
  }
}

