import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { PageBlogComponent } from '../page-blog/page-blog.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'listedeblogs', component: BlogListComponent, canActivate: [AuthGuard], },
  { path: 'pageblog', component: PageBlogComponent, canActivate: [AuthGuard],  },
  { path: 'pageblog/:id', component: PageBlogComponent, canActivate: [AuthGuard], },
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
