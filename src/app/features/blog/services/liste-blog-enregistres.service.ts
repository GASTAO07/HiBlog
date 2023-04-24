import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  private blogs: Blog[] = [];
  private categories: Category[] = [];
  private count: number = (Math.floor(Math.random() * 100));
  constructor() { }

  // addCategories(category: string): void {
  //   this.count++;
  //   let id = (Math.floor(Math.random() * 100) + 1);
  //   // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
  //   while (this.categories.some(category => category.id === id)) {
  //     id = (Math.floor(Math.random() * 100) + 1);
  //   }
  //   this.categories.push({ id: id, label: category });
  //   console.log('idcateg', id);
  // }

  addCategories(label: string): void {
    let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    while (this.categories.some(category => category.id === id)) {
      id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
    }

    this.categories.push({ id: id, label: label });
    console.log('idcateg', id);
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

  getCategoryById(id: number): Category {
    for (const category of this.categories) {
      if (category.id === id) {
        return category;
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

  addBlog(titre: string, description: string, category: Category): void {
    let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    while (this.blogs.some(blog => blog.id === id)) {
      id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
    }

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

  modifyBlog(id: number, titre: string, description: string, category: Category): void {
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
