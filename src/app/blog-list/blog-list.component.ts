import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: { [titre: string]: string };
  declare Object: any;
  editTitre: string;
  editDescription: string;

  constructor(private router: Router,
    private auth: AuthService,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog(titre: string): void {
    // Définissez les variables editTitre et editDescription avec le titre et la description actuels.
    this.editTitre = titre;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);

    // Affiche le formulaire pour permettre à l'utilisateur de saisir le nouveau titre et la nouvelle description.
    document.getElementById('edit-form').style.display = 'block';
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour soumettre le nouveau titre et la nouvelle description
  submitEdit(): void {
    // Mise à jour du titre et de la description dans la liste des blogs
    this.listeBlogEnregistresService.addETitreDescription(this.editTitre, this.editDescription);

    // Efface le formulaire et le cache
    this.editTitre = '';
    this.editDescription = '';
    document.getElementById('edit-form').style.display = 'none';

    // Rafraîchir la liste des blogs
    this.refreshBlogs();
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour annuler l'édition et masquer
  // Afficher l’élément avec un ID de « edit-form » en définissant son style sur .displayblock
  cancelEdit(): void {
    this.editTitre = '';
    this.editDescription = '';
    document.getElementById('edit-form').style.display = 'none';
    /* La fonction permet de rechercher un élément avec l’ID spécifié dans le document HTML.
    Dans ce cas, l’ID est « edit-form ».document.getElementById
    Une fois l’élément trouvé, sa propriété est accessible, ce qui représente le style en ligne de l’élément.style
       La propriété du style de l’élément est alors définie, ce qui masque l’élément.display none
*/
  }

  // ------------------------------------------------------------------------------------

  // Rafraichissement d'un blog
  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  // ------------------------------------------------------------------------------------

  // Effacer un blog
  deleteBlog(titre: string): void {
    this.listeBlogEnregistresService.deleteBlog(titre);
    this.refreshBlogs();
  }

  // ------------------------------------------------------------------------------------

  addNewBlog(): void {
    this.router.navigate(['pageblog']);
  }
}
