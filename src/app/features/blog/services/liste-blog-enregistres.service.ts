import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  private blogs: Blog[] = [];
  private categories: Category[] = [];

  constructor() { }

  findIndexById(id: number, array: any[]): number {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return array.findIndex(element => element.id === id);
  }

  getCategoryById(id: number): Category {
    const index = this.findIndexById(id, this.categories);
    return index !== -1 ? this.categories[index] : null;
  }

  getBlogById(id: number): Blog {
    const index = this.findIndexById(id, this.blogs);
    return index !== -1 ? this.blogs[index] : null;
  }

  modifyBlog(id: number, titre: string, description: string, category: Category): void {
    const index = this.findIndexById(id, this.blogs);
    if (index !== -1) {
      this.blogs[index] = { id, titre, description, category };
    } else {
      throw new Error('blog n\'existe pas');
    }
  }

  deleteBlog(id: number): void {
    const index = this.findIndexById(id, this.blogs);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }

  getCategorieList(): Category[] {
    return this.categories;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getUniqueCategories() {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const allCategories = this.categories.map(categories => categories.label);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/typedef
    const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);
    return uniqueCategories;
  }

  getBlogsByCategory(category: Category): Blog[] {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return this.blogs.filter(blog => blog.category === category);
  }

  getBlogList(): Blog[] {
    return this.blogs;
  }

  generateUniqueId(existingIds: number[]): number {
    if (existingIds.length >= Number.MAX_SAFE_INTEGER) {
      throw new Error('impossible de génerer un id');
    }
    let id: number;
    do {
      id = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1;
    } while (existingIds.includes(id));
    return id;
  }

  addCategories(label: string): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const id = this.generateUniqueId(this.categories.map(category => category.id));
    this.categories.push({ id: id, label: label });
  }

  addBlog(titre: string, description: string, category: Category): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const id = this.generateUniqueId(this.blogs.map(blog => blog.id));
    this.blogs.push({ id: id, titre: titre, description: description, category: category });
  }

  duplicateBlog(id: number): void {
    const blog = this.getBlogById(id);
    if (blog) {
      // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
      const newId = this.generateUniqueId(this.blogs.map(blog => blog.id));
      const newBlog = { id: newId, titre: blog.titre, description: blog.description, category: blog.category };
      this.blogs.push(newBlog);
    } else {
      throw new Error('blog n\'existe pas');
    }
  }
}
