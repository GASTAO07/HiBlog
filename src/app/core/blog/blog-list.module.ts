import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { PageBlogComponent } from './components/blog-creation-edit/page-blog.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
  providers: [AuthGuard]
})
export class BlogModule { }
