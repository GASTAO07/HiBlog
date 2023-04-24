import { Component } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { ListeBlogEnregistresService } from '../../services/liste-blog-enregistres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/features/user/interfaces/user.interface';
import { Blog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  user: User;
  blog: Blog;
  blogs: Blog[] = [];
  categories: Category[] = [];
  category: Category;
  titlePage: string;

  constructor(
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.getBlogList();
    this.categories = this.listeBlogEnregistresService.getCategorieList();

    // eslint-disable-next-line dot-notation
    const id = parseInt(this.route.snapshot.queryParams['id'], 10);
    if (!!id) {
      const categoryFound = this.listeBlogEnregistresService.getCategoryById(id);
      if (!!categoryFound) {
        this.category = categoryFound;
      } else {
        console.error('id invalide');
      }
    } else {
      this.titlePage = 'Ajouter une categorie';
      this.category = {  label: '' };
    }
  }

  creerUneCategory(): void {
    this.listeBlogEnregistresService.addCategories(this.category.label);
    this.router.navigate(['/blog/listedeblogs']);
  }
}

