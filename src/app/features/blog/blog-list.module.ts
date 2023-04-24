import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { PageBlogComponent } from './components/blog-creation-edit/page-blog.component';
import { CreateCategoriesComponent } from './components/categories/create-categories.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog/listedeblogs' },
  { path: 'create-categories', component: CreateCategoriesComponent },
  { path: 'listedeblogs', component: BlogListComponent },
  { path: 'pageblog', component: PageBlogComponent },
  { path: 'pageblog/:id', component: PageBlogComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class BlogModule { }
