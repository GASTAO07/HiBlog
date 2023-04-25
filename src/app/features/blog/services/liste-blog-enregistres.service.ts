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


  getUniqueCategories() : String[] {
    const allCategories = this.categories.map((categories : Category): string  => categories.label);
    const uniqueCategories = allCategories.filter((category: string, index: number, self: string[]) : boolean => self.indexOf(category) === index);
    return uniqueCategories;
  }

  findIndexById(id: number, array: any[]): number {
    return array.findIndex((element : any) : any => element.id === id);
  }

  getBlogsByCategory(category: Category): Blog[] {
    return this.blogs.filter((blog : Blog) : any => blog.category === category);
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
    const id = this.generateUniqueId(this.categories.map((category : Category) : number  => category.id));
    this.categories.push({ id: id, label: label });
  }

  addBlog(titre: string, description: string, category: Category): void {
    const id = this.generateUniqueId(this.blogs.map((blog: Blog) : number => blog.id));
    this.blogs.push({ id: id, titre: titre, description: description, category: category });
  }

  duplicateBlog(id: number): void {
    const blog = this.getBlogById(id);
    if (blog) {
      const newId = this.generateUniqueId(this.blogs.map((blog: Blog) : number => blog.id));
      const newBlog = { id: newId, titre: blog.titre, description: blog.description, category: blog.category };
      this.blogs.push(newBlog);
    } else {
      throw new Error('blog n\'existe pas');
    }
  }
}
