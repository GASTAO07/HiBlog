import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interface';
import { Categorie } from '../interfaces/categorie.interface';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  private blogs: Blog[] = [];
  private categories: Categorie[] = [];

  constructor() { }
  addCategories(categorie: string): void {
    const id = (Math.random() * 100);
    this.categories.push({ idCategory: id, category: categorie });
    console.log('idcateg', id);
  }

  getCategorieList(): Categorie[] {
    return this.categories;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getUniqueCategories() {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const allCategories = this.categories.map(categories => categories.category);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/typedef
    const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);
    return uniqueCategories;
  }

  getBlogsByCategory(category: Categorie): Blog[] {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return this.blogs.filter(blog => blog.category === category);
  }

  getCategoryById(id: number): Categorie {
    for (const categorie of this.categories) {
      if (categorie.idCategory === id) {
        return categorie;
      }
    }
  }

  getBlogList(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: number): Blog {
    for (const blog of this.blogs) {
      if (blog.id === id) {
        return blog;
      }
    }
  }

  addBlog(titre: string, description: string, category: Categorie): void {
    const id = (Math.random() * 100);
    this.blogs.push({ id: id, titre: titre, description: description, category: category });
    console.log('idblog', id);
  }

  duplicateBlog(id: number): void {
    const blog = this.getBlogById(id);
    if (blog) {
      const newBlog = { id: this.blogs.length + 1, titre: blog.titre, description: blog.description, category: blog.category };
      this.blogs.push(newBlog);
    } else {
      throw new Error('blog n\'existe pas');
    }
  }

  modifyBlog(id: number, titre: string, description: string, category: Categorie): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs[index] = { id, titre, description, category };
    } else {
      throw new Error('blog n\'existe pas');
    }
  }

  deleteBlog(id: number): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }
}
