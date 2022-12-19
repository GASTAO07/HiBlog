import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit{

  btnText : string = 'Enregistrer';

  constructor(
    private router: Router,
    private auth: AuthService) { }
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
