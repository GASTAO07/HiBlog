import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit{

  btnText : string = 'Enregistrer';
  router: any;

  constructor() {}

  ngOnInit(): void {

  }
  // voir si l'utilisateur est logged
  // isLoggedInPageblogComponent qui vérifie si l’état de connexion de l’utilisateur est 'true. Si l’utilisateur est connecté, la méthode renvoie 'truetrue, sinon il retourne 'false
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigateByUrl('auth/login');
  }
}
