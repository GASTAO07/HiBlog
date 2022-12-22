import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog-enregistres.service';
import { ReeditService } from '../reedit.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  blogs: { [titre: string]: string };
  declare Object: any;

  constructor(private router: Router,
    private auth: AuthService,
    private listeBlogEnregistresService : ListeBlogEnregistresService,
    private reeditService: ReeditService) {}

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog(titre: string): void {
    const currentDescription = this.reeditService.getTitreDescription(titre);
    const newDescription = prompt('Enter the new description for this blog:', currentDescription);
    this.reeditService.setTitreDescription(titre, newDescription);
  }
}
