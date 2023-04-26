import { Injectable } from '@angular/core';
import { Blog } from '../../interfaces/blog.interface';
import { Category } from '../../interfaces/category.interface';
import { IdmanagerService } from 'src/app/shared/services/idmanager.service';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  private blogs: Blog[] = [];
  private categories: Category[] = [];

  constructor(private idmanagerService : IdmanagerService) { }

  getBlogById(id: number): Blog {
    const index = this.idmanagerService.findIndexById(id, this.blogs);
    return index !== -1 ? this.blogs[index] : null;
  }

  getBlogList(): Blog[] {
    return this.blogs;
  }

  modifyBlog(id: number, titre: string, description: string, category: Category): void {
    const index = this.idmanagerService.findIndexById(id, this.blogs);
    if (index !== -1) {
      this.blogs[index] = { id, titre, description, category };
    } else {
      throw new Error('blog n\'existe pas');
    }
  }

  deleteBlog(id: number): void {
    const index = this.idmanagerService.findIndexById(id, this.blogs);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }

  addBlog(titre: string, description: string, category: Category): void {
    const id = this.idmanagerService.generateUniqueId(this.blogs.map((blog: Blog) : number => blog.id));
    this.blogs.push({ id: id, titre: titre, description: description, category: category });
  }

  duplicateBlog(id: number): void {
    const blog = this.getBlogById(id);
    if (blog) {
      const newId = this.idmanagerService.generateUniqueId(this.blogs.map((blog: Blog) : number => blog.id));
      const newBlog = { id: newId, titre: blog.titre, description: blog.description, category: blog.category };
      this.blogs.push(newBlog);
    } else {
      throw new Error('blog n\'existe pas');
    }
  }

  getBlogsByCategory(category: Category): Blog[] {
    return this.blogs.filter((blog : Blog) : any => blog.category === category);
  }
}
