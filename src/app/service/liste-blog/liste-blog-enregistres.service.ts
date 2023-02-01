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
    // Itère dans la liste des articles de blog et renvoie celui dont l'ID correspond.
    for (const blog of this.blogs) {
      if (blog.id === id) {
        return blog;
      }
    }
    return undefined;
  }

  // ------------------------------------------------------------------------------------
  updateBlog(id: number, titre: string, description: string): void {
    // Trouvez l'index de l'article de blog avec l'ID correspondant.
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex(blog => blog.id === id);
    // Vérifiez si un article de blog portant le même titre existe déjà.
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const existingBlogIndex = this.blogs.findIndex(blog => blog.titre === titre);
    if (index !== -1) {
      // Mettre à jour l'article de blog existant s'il existe
      if (existingBlogIndex !== -1 && existingBlogIndex !== index) {
        this.blogs[existingBlogIndex].description = description;
      } else {
        // Mettre à jour le titre et la description de l'article de blog.
        this.blogs[index].titre = titre;
        this.blogs[index].description = description;
      }
    } else if (existingBlogIndex === -1) {
      // Ajoutez un nouvel article de blog s'il n'existe pas déjà.
      this.blogs.push({ id, titre, description });
    }
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour ajouter une nouvelle paire titre/description
  addBlog(titre: string, description: string): void {
    this.blogs[titre] = description;
    console.log('addBlog', this.blogs);
  }

  // ------------------------------------------------------------------------------------

  // // Méthode pour récupérer description d'un titre
  // getBlogList(titre: string): Blog | undefined {
  //   // renvoyer 'undefined si aucun description n’est associé au titre
  //   return this.blogs[titre];
  // }

  // ------------------------------------------------------------------------------------

  //  vérifier si le titre donnée est présent
  hasTitre(id: number): boolean {
    return this.blogs?.hasOwnProperty(id);
    /*
    hasOwnProperty() Méthode intégrée d’objets qui retourne une valeur booléenne
    indiquant si l’objet possède une propriété avec la clé spécifiée.

    il prend la clé (nom de la propriété) comme argument.
    */
  }

  // ------------------------------------------------------------------------------------
  // Méthode pour supprimer un couple titre/description de la liste
  deleteBlog(id: number): void {
    delete this.blogs[id];
  }

}
