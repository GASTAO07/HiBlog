import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { ReeditService } from '../service/reedit-blog/reedit.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  blogs: { [titre: string]: string };
  declare Object: any;
  editTitre: string;
  editDescription: string;

  constructor(private router: Router,
    private auth: AuthService,
    private listeBlogEnregistresService : ListeBlogEnregistresService,
    private reeditService: ReeditService) {}

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  // refreshBlogs(): void {
  //   this.blogs = this.listeBlogEnregistresService.titreDescription;
  // }

  // editBlog(titre: string): void {
  //   const currentDescription = this.reeditService.getTitreDescription(titre);
  //   const newDescription = prompt('Enter the new description for this blog:', currentDescription);
  //   this.reeditService.setTitreDescription(titre, newDescription);
  // }
  addNewBlog(): void {
    this.router.navigate(['pageblog']);
  }

  // editBlog(titre: string): void {
  //   this.editTitre = titre;
  //   this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
  // }

  editBlog(titre : string) : void {
    // Définissez les variables editTitre et editDescription avec le titre et la description actuels.
    this.editTitre = titre ;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre) ;

    // Affiche le formulaire pour permettre à l'utilisateur de saisir le nouveau titre et la nouvelle description.
    document.getElementById('edit-form').style.display = 'block' ;
  }

  // Méthode pour soumettre le nouveau titre et la nouvelle description
  submitEdit() : void {
    // Mise à jour du titre et de la description dans la liste des blogs
    this.listeBlogEnregistresService.addETitreDescription(this.editTitre, this.editDescription) ;

    // Efface le formulaire et le cache
    this.editTitre = '' ;
    this.editDescription = '' ;
    document.getElementById('edit-form').style.display = 'none' ;

    // Rafraîchir la liste des blogs
    this.refreshBlogs() ;
  }

  // Méthode pour annuler l'édition et masquer le formulaire
  cancelEdit() : void {
    this.editTitre = '' ;
    this.editDescription = '' ;
    document.getElementById('edit-form').style.display = 'none' ;
  }

  refreshBlogs() : void {
    this.blogs = this.listeBlogEnregistresService.titreDescription ;
  }

  deleteBlog(titre: string): void {
    this.listeBlogEnregistresService.deleteBlog(titre);
    this.refreshBlogs();
  }
}
