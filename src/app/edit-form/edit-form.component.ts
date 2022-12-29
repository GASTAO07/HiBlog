// import { Component, OnInit } from '@angular/core';
// import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
// import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
// import { Router, ActivatedRoute, } from '@angular/router';


// @Component({
//   selector: 'app-edit-form',
//   templateUrl: './edit-form.component.html',
//   styleUrls: ['./edit-form.component.scss']
// })

// export class EditFormComponent implements OnInit {
//   id: string;
//   editTitre: string;
//   editDescription: string;
//   // editedBlog: Blog;
//   blogs: { [titre: string]: string };
//   declare Object: any;
//   editedBlog: { titre: string, description: string, id: string };
//   blog: { id: string, titre: string, description: string };

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private listeBlogEnregistresService: ListeBlogEnregistresService,
//     public loginValidationService : LoginValidationService
//   ) { }

//   ngOnInit(): void {
//     this.blogs = this.listeBlogEnregistresService.titreDescription;
//   }
//   // ngOnInit(): void {
//   //   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   //   this.route.paramMap.subscribe((params: ParamMap) => {
//   //     this.id = params.get('id');
//   //     this.editedBlog = this.listeBlogEnregistresService.getBlogById(this.id);
//   //     if (this.editedBlog) {
//   //       this.editTitre = this.editedBlog.titre;
//   //       this.editDescription = this.editedBlog.description;
//   //     }
//   //   });
//   // }
//   // editBlog(titre: string): void {
//   // editBlog(): void {
//   //   // Définissez les variables editTitre et editDescription avec le titre et la description actuels.
//   //   // this.editTitre = titre;
//   //   // this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);

//   //   // // Affiche le formulaire pour permettre à l'utilisateur de saisir le nouveau titre et la nouvelle description.
//   //   // document.getElementById('edit-blog-titre-description').style.display = 'block';
//   //   this.router.navigateByUrl('editpage');
//   // }

//   // editBlog(key: string): void {
//   //   this.router.navigate(['editpage', key]);
//   // }

//   editBlog(): void {
//     this.router.navigate(['editpagecompo']);
//   }

//   // editBlog(id: string): void {
//   //   // Retrieve the specific blog post using the ID
//   //   const blog = this.listeBlogEnregistresService.getBlogById(id);
//   //   if (blog) {
//   //     // Set the editTitre and editDescription properties to the current title and description
//   //     this.editTitre = blog.titre;
//   //     this.editDescription = blog.description;
//   //     // Display the form for the user to enter the new title and description
//   //     document.getElementById('edit-blog-titre-description').style.display = 'block';
//   //   }
//   // }

//   // editBlog(blog: Blog): void {
//   //   this.editedBlog = blog;
//   //   // Show the form
//   //   document.getElementById('edit-blog-form').style.display = 'block';
//   // }

//   submitEdit(): void {
//     this.editedBlog.titre = this.editTitre;
//     this.editedBlog.description = this.editDescription;
//     // Clear the form and hide it
//     this.editTitre = '';
//     this.editDescription = '';
//     document.getElementById('edit-blog-form').style.display = 'none';
//   }
//   // submitEdit(): void {
//   //   this.listeBlogEnregistresService.updateBlog(this.id, this.editTitre, this.editDescription);
//   //   this.editTitre = '';
//   //   this.editDescription = '';
//   //   this.router.navigate(['/']);
//   // }
//   refreshBlogs(): void {
//     this.blogs = this.listeBlogEnregistresService.titreDescription;
//   }

//   cancelEdit(): void {
//     this.editTitre = '';
//     this.editDescription = '';
//     this.router.navigate(['/']);
//   }
// }

// // //   // ------------------------------------------------------------------------------------

// // //   // Méthode pour soumettre le nouveau titre et la nouvelle description
// // //   // submitEdit(): void {
// // //   //   // Mise à jour du titre et de la description dans la liste des blogs
// // //   //   this.listeBlogEnregistresService.addETitreDescription(this.editTitre, this.editDescription);

// // //   //   // Efface le formulaire et le cache
// // //   //   this.editTitre = '';
// // //   //   this.editDescription = '';
// // //   //   document.getElementById('edit-blog-titre-description').style.display = 'none';

// // //   // }
// // //   // submitEdit(id: string): void {
// // //   //   // Update the specific blog post with the new title and description
// // //   //   this.listeBlogEnregistresService.updateBlog(id, this.editTitre, this.editDescription);
// // //   //   // Clear the form and hide it
// // //   //   this.editTitre = '';
// // //   //   this.editDescription = '';
// // //   //   document.getElementById('edit-blog-titre-description').style.display = 'none';
// // //   // }

// // //   // ------------------------------------------------------------------------------------

// // //   // Méthode pour annuler l'édition et masquer
// // //   // Afficher l’élément avec un ID de « edit-form » en définissant son style sur .displayblock
// // //   //   cancelEdit(): void {
// // //   //     this.editTitre = '';
// // //   //     this.editDescription = '';
// // //   //     document.getElementById('edit-blog-titre-description').style.display = 'none';
// // //   //     /* La fonction permet de rechercher un élément avec l’ID spécifié dans le document HTML.
// // //   //     Dans ce cas, l’ID est « edit-form ».document.getElementById
// // //   //     Une fois l’élément trouvé, sa propriété est accessible, ce qui représente le style en ligne de l’élément.style
// // //   //        La propriété du style de l’élément est alors définie, ce qui masque l’élément.display none
// // //   // */
// // //   //   }

// // //   cancelEdit(): void {
// // //     this.editTitre = '';
// // //     this.editDescription = '';
// // //     this.router.navigate(['/']);
// // //   }



// // //   // ------------------------------------------------------------------------------------

// // Rafraichissement d'un blog
// // refreshBlogs(): void {
// //   this.blogs = this.listeBlogEnregistresService.titreDescription;
// // }

// // // }
// // import { Component, OnInit } from '@angular/core';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { BlogModel } from 'src/app/models/BlogModel';
// // import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
// // import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

// // interface Blog {
// //   titre: string,
// //   description: string,
// //   id?: string,
// // }

// // @Component({
// //   selector: 'app-edit-form',
// //   templateUrl: './edit-form.component.html',
// //   styleUrls: ['./edit-form.component.scss']
// // })
// // export class EditFormComponent implements OnInit {
// //   blog: Blog;
// //   blogmodel: BlogModel;
// //   isValidBlog: boolean = true;
// //   id: string;

// //   constructor(
// //     private router: Router,
// //     private route: ActivatedRoute,
// //     private listeBlogEnregistresService: ListeBlogEnregistresService,
// //     public loginValidationService: LoginValidationService
// //   ) { }

// //   ngOnInit(): void {
// //     this.id = this.route.snapshot.paramMap.get('id');
// //     this.blog = this.listeBlogEnregistresService.getBlogById(this.id);
// //     if (!this.blog) {
// //       this.router.navigateByUrl('/listdeblogs');
// //       return;
// //     }
// //     this.blogmodel = new BlogModel({
// //       blog: this.blog,
// //       terms: false
// //     });
// //   }

// //   controleblog(): void {
// //     console.log('ici Blog controle()', this.blogmodel.blog.description, this.blogmodel.blog.titre);
// //     if (!this.blogmodel.blog.description || !this.blogmodel.blog.titre) {
// //       {
// //         this.isValidBlog = true;
// //       }
// //     } else {
// //       this.isValidBlog = false;
// //     }
// //   }

// //   // Modification d'un blog
// //   updateBlog(): void {
// //     this.listeBlogEnregistresService.updateBlog(
// //       this.id,
// //       this.blogmodel.blog.titre,
// //       this.blogmodel.blog.description
// //     );
// //     this.controleblog();
// //     this.router.navigateByUrl('/listdeblogs');
// //   }
// // }
import { Component, OnInit } from '@angular/core';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { Router, ActivatedRoute, } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent implements OnInit {
  id: string;
  editTitre: string;
  editDescription: string;
  // editedBlog: Blog;
  blogs: { [titre: string]: string };
  declare Object: any;
  editedBlog: { titre: string, description: string, id: string };  // Add a new property to store the edited blog
  blog: { id: string, titre: string, description: string };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formsModule : FormsModule,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog(titre: string): void {
    this.editTitre = titre;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
    console.log('edit-form', this.editDescription, this.editTitre);
    // Naviguer vers le composant de formulaire d'édition de blog en utilisant le titre et la description du blog sélectionné comme paramètres de la route
    this.router.navigate(['editpagecompo'], { queryParams: { titre: this.editTitre, description: this.editDescription } });
    // this.router.navigate(['editpagecompo']);
    // document.getElementById('edit-blog-titre-description');
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  // cancelEdit(): void {
  //   this.editTitre = '';
  //   this.editDescription = '';
  //   this.router.navigate(['/']);
  // }
}
