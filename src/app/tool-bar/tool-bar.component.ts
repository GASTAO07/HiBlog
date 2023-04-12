import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../auth/services/login-validation-service.service';
import { UserService } from '../user/services/user.service';
import { User } from '../user/interfaces/user.interface';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Input() pageTitle: string;
  searchQuery: string = '';
  isUserLoggedIn: boolean = false;
  isValidBlog: boolean = true;
  user: User;

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      // Définir les valeurs par défaut de l'objet utilisateur s'il n'est pas déjà enregistré dans la mémoire locale.
      this.user = {
        nom: '',
        prenom: '',
        email: '',
        avatarUrl: '',
        motdepasse: { pwd: '', confirmPwd: '' }
      };
    }

    const currentUserId = Number(localStorage.getItem('currentUserId'));
    const currentUser: User = this.userService.getUserById(currentUserId);
    if (currentUser === undefined) {
      return;
    } else {
      this.user = currentUser;
    }
    this.isUserLoggedIn = this.loginValidationService.isLoggedIn();

    const userId = this.user.id;
    const avatarUrl = localStorage.getItem(`user_${userId}_avatar`);
    this.user.avatarUrl = avatarUrl;

  }

  constructor(
    private loginValidationService: LoginValidationService,
    private router: Router,
    private userService: UserService) { }

  goToBloglist(): void {
    this.router.navigateByUrl('/blog/listedeblogs');
  }

  logout(): void {
    this.loginValidationService.logOut();
  }

  userInfo(): void {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    this.router.navigateByUrl('/user/profile').then(() => {
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

  onFileSelected(event: any) : void {
    // Récupération du fichier sélectionné dans l'événement
    const selectedFile: File = event.target.files[0];
    // Instanciation d'un objet FileReader
    const reader = new FileReader();
    // Lecture du contenu du fichier en tant que URL de données (data URL)
    reader.readAsDataURL(selectedFile);
    // Attente que la lecture soit terminée
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    reader.onload = () => {
      // Attente que la lecture soit terminée
      const image = reader.result as string;
      // Attente que la lecture soit terminée
      const userId = this.user.id;
      // Stockage de l'URL de données de l'image dans le localStorage
      localStorage.setItem(`user_${userId}_avatar`, image);
      // Stockage de l'URL de données de l'image dans le localStorage
      this.user.avatarUrl = image;
    };
  }

  set avatarUrl(value: string) {
    this.user.avatarUrl = value;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
