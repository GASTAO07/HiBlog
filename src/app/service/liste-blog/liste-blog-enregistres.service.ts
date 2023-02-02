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

  // ------------------------------------------------------------------------------------
  constructor() { }

  getBlogList(): Blog[] | undefined {
    return this.blogs;
  }

  // ------------------------------------------------------------------------------------
  getBlogById(id: number): Blog {
    for (const blog of this.blogs) {
      if (blog.id === id) {
        return blog;

      }
    }
  }

  addBlog(titre : string, description : string) : void {
    const id = this.blogs.length + 1;
    this.blogs.push({id: id, titre: titre, description: description});
  }

  // ------------------------------------------------------------------------------------
  modifyBlog(id: number, titre: string, description: string): void {
    // Trouvez l'index du blog dont l'ID correspond.
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs[index].titre = titre;
      this.blogs[index].description = description;
    } else {
      // Ajoutez un nouveau blog s'il n'existe pas déjà.
      this.blogs.push({ id, titre, description });
    }
  }

  //  vérifier si le titre donnée est présent
  existeBlog(id: number): boolean {
    return this.blogs?.hasOwnProperty(id);
  }

  // ------------------------------------------------------------------------------------
  // Méthode pour supprimer un couple titre/description de la liste
  deleteBlog(id: number): void {
    // Find the index of the blog with the matching ID.
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    // Check if a blog with the given ID exists.
    if (index !== -1) {
      // Delete the blog from the blogs array by splicing it from the array.
      this.blogs.splice(index, 1);
    }
  }


}
