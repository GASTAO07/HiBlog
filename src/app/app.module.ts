import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { CommonModule } from '@angular/common';
import { CreerUncompteComponent } from './creer-uncompte/creer-uncompte.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { UserListComponent } from './user-list/user.component';

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
    AuthRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [BlogListComponent, LoginComponent, PageBlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
