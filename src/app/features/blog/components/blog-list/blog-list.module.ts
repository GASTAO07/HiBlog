import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { PageBlogComponent } from '../blog-creation-edit/page-blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog/listedeblogs'},
  { path: 'listedeblogs', component: BlogListComponent },
  { path: 'pageblog', component: PageBlogComponent },
  { path: 'pageblog/:id', component: PageBlogComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class BlogModule { }