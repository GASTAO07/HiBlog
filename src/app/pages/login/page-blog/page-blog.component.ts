import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit{

   btnText : string = 'Enregistrer'; 

constructor(){}

  ngOnInit()
  {
    
  }

}