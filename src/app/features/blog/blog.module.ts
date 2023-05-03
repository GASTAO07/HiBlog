import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { PageBlogComponent } from './components/blog-creation-edit/page-blog.component';
import { CreateCategoriesComponent } from './components/categories/create-categories.component';
import { ListeBlogEnregistresService } from './services/liste-blog-enregistres/liste-blog-enregistres.service';
import { CategoryService } from './services/category/category.service';
import { IdmanagerService } from 'src/app/shared/services/idmanager.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog/listedeblogs' },
  { path: 'create-categories', component: CreateCategoriesComponent },
  { path: 'listedeblogs', component: BlogListComponent },
  { path: 'pageblog', component: PageBlogComponent },
  { path: 'pageblog/:id', component: PageBlogComponent },
];

@NgModule({
  declarations: [
    BlogListComponent,
    CreateCategoriesComponent,
    PageBlogComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    {
      provide: CategoryService,
      useClass: CategoryService,
      deps: [IdmanagerService],
    },
    {
      provide: ListeBlogEnregistresService,
      useClass: ListeBlogEnregistresService,
      deps: [IdmanagerService],
    },
    IdmanagerService,
  ],
})
export class BlogModule { }
