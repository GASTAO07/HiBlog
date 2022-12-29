import { Injectable } from '@angular/core';
interface Blog {
  titre: string,
  description: string,
  id?: string,
}

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {

  // Objet pour stocker les paires titre/description
  titreDescription: { [titre: string]: string } = {};
  blogs: { id: string, titre: string, description: string }[] = [];

  constructor() {}
  getBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: string): { titre: string, description: string } | undefined {
    // Iterate through the list of blog posts and return the one with the matching ID
    for (const blog of this.blogs) {
      if (blog.id === id) {
        return blog;
      }
    }
    return undefined;
  }

  // updateBlog(titre: string, description: string): void {
  //   // Find the index of the blog post with the matching ID
  //   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  //   const index = this.blogs.findIndex((blog: { titre: string, description: string }));
  //   if (index !== -1) {
  //     // Update the title and description of the blog post
  //     this.blogs[index].titre = titre;
  //     this.blogs[index].description = description;
  //   }
  // }
  updateBlog(id: string, titre: string, description: string): void {
    // Find the index of the blog post with the matching ID
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const index = this.blogs.findIndex((blog: { id: string, titre: string, description: string }) => blog.id === id);
    if (index !== -1) {
      // Update the title and description of the blog post
      this.blogs[index].titre = titre;
      this.blogs[index].description = description;
    }
  }

  // Méthodde pour renvoyer la description d'un titre
  setTitreDescription(titre: string, description: string): void {
    this.titreDescription[titre] = description;
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour ajouter une nouvelle paire titre/description
  addETitreDescription(titre: string, description: string): void {
    this.titreDescription[titre] = description;
    console.log('addETitreDescription', this.titreDescription);
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour récupérer description d'un titre
  getTitreDescription(titre: string): string | undefined {
    // renvoyer 'undefined si aucun description n’est associé au titre
    return this.titreDescription[titre];
    /* prend une adresse e-mail comme argument et renvoie
      le mot de passe associé à cette adresse e-mail, s’il exist*/
    console.log(this.getTitreDescription);
  }

  // ------------------------------------------------------------------------------------

  //  vérifier si une adresse e-mail donnée est présente dans le 'emailPasswords objet
  hasTitre(titre: string): boolean {
    return this.titreDescription?.hasOwnProperty(titre);
    /*
    hasOwnProperty() Méthode intégrée d’objets qui retourne une valeur booléenne
    indiquant si l’objet possède une propriété avec la clé spécifiée.

    il prend la clé (nom de la propriété) comme argument.
    */
  }

  // ------------------------------------------------------------------------------------
  // Méthode pour supprimer un couple titre/description de la liste
  deleteBlog(titre: string): void {
    delete this.titreDescription[titre];
  }

}



// import { Injectable } from '@angular/core';

// interface Blog {
//   titre: string,
//   description: string,
//   id?: string,
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ListeBlogEnregistresService {

//   // Objet pour stocker les paires titre/description
//   titreDescription: { [titre: string]: string } = {};
//   blogs: { id: string, titre: string, description: string }[] = [];

//   constructor() {}

//   getBlogs(): Blog[] {
//     return this.blogs;
//   }

//   getBlogById(id: string): { titre: string, description: string } | undefined {
//     // Iterate through the list of blog posts and return the one with the matching ID
//     for (const blog of this.blogs) {
//       if (blog.id === id) {
//         return blog;
//       }
//     }
//     return undefined;
//   }

//   updateBlog(id: string, titre: string, description: string): void {
//     // Find the index of the blog post with the matching ID
//     // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//     const index = this.blogs.findIndex((blog: { id: string, titre: string, description: string }) => blog.id === id);
//     if (index !== -1) {
//       // Update the title and description of the blog post
//       this.blogs[index].titre = titre;
//       this.blogs[index].description = description;
//     }
//   }

//   setTitreDescription(titre: string, description: string): void {
//     this.titreDescription[titre] = description;
//   }

//   addETitreDescription(titre: string, description: string): void {
//     this.titreDescription[titre] = description;
//     console.log('addETitreDescription', this.titreDescription);
//   }

//   getTitreDescription(titre: string): string | undefined {
//     return this.titreDescription[titre];
//   }

//   hasTitre(titre: string): boolean {
//     return this.titreDescription?.hasOwnProperty(titre);
//   }

//   deleteBlog(titre: string): void {
//     delete this.titreDescription[titre];
//   }

// }
