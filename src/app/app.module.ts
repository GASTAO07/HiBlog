import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageBlogComponent } from './pages/login/page-blog/page-blog.component';
import { CommonModule } from '@angular/common';
import { CreerUncompteComponent } from './creer-uncompte/creer-uncompte.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageBlogComponent,
    CreerUncompteComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
