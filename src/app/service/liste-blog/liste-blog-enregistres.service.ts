/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';

export interface Blog {
  id: number,
  titre: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})

export class ListeBlogEnregistresService {
  // Objet pour stocker les paires titre/description
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

  addBlog(titre: string, description: string): void {
    const id = this.blogs.length + 1;
    this.blogs.push({ id: id, titre: titre, description: description });
    console.log('Addblog', titre, description);
  }

  modifyBlog(id: number, titre: string, description: string): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    console.log('index2', titre, description, this.blogs[index]);
    // Si l'index a été trouvé, actualiser le titre et la description
    if (index !== -1) {
      this.blogs[index] = { id, titre, description };
      console.log('index2', titre, description, this.blogs[index]);
    } else {
      throw new Error('blog n\'existe pas ');
    }
    console.log(' Blog Modifié :', this.blogs[index]);
  }

  //  vérifier si le titre donnée est présent
  existeBlog(id: number): boolean {
    return this.blogs?.hasOwnProperty(id);
  }

  // Méthode pour supprimer un couple titre/description de la liste
  deleteBlog(id: number): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }


}
