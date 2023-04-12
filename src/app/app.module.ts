import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { PageBlogComponent } from './blog/components/blog-creation-edit/page-blog.component';
import { CommonModule } from '@angular/common';
import { CreerUncompteComponent } from './auth/components/creer-uncompte/creer-uncompte.component';
import { BlogListComponent } from './blog/blog-list.component';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { UserListComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageBlogComponent,
    CreerUncompteComponent,
    BlogListComponent,
    ToolBarComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [BlogListComponent, LoginComponent, PageBlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
