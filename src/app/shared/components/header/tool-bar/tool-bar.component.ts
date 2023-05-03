import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from 'src/app/core/auth/services/login-validation.service/login-validation.service';
import { UserService } from 'src/app/core/auth/services/user.service/user.service';
import { User } from 'src/app/features/user/interfaces/user.interface';

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
    this.router.navigateByUrl('/user/profile').then(() : any => {
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

  onFileSelected(event: any) : void {
    const selectedFile: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () : any => {
      const image = reader.result as string;
      const userId = this.user.id;
      localStorage.setItem(`user_${userId}_avatar`, image);
      this.user.avatarUrl = image;
    };
  }

  set avatarUrl(value: string) {
    this.user.avatarUrl = value;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
