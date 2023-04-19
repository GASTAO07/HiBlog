import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  private blogs: Blog[] = [];

  constructor() { }

  getBlogList(): Blog[] | undefined {
    return this.blogs;
  }

  getBlogById(id: number): Blog {
    for (const blog of this.blogs) {
      if (blog.id === id) {
        return blog;
      }
    }
  }

  addBlog(titre: string, description: string, category: string): void {
    const id = this.blogs.length + 1;
    this.blogs.push({ id: id, titre: titre, description: description, category: category });
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

  modifyBlog(id: number, titre: string, description: string, category: string): void {
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

  getBlogsByCategory(category: string): Blog[] {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return this.blogs.filter(blog => blog.category === category);
  }

  getUniqueCategories() : void {
    // Utilisez la méthode map pour extraire uniquement les catégories de chaque blog
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const allCategories = this.blogs.map(blog => blog.category);
  }

}

