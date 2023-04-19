import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard/auth.guard';
import { AuthLoginGuard } from './core/auth/guards/auth-login.guard/auth-login.guard';

const routes: Routes = [
  {
    path: 'auth',
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    loadChildren: () => import('./features/login/login.module').then(m => m.AuthModule),
    canActivate: [AuthLoginGuard]
  },

  {
    path: 'user',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/typedef
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'blog',
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    loadChildren: () => import('./features/blog/components/blog-list/blog-list.module').then(m => m.BlogModule),
    canActivate: [AuthGuard]

  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthLoginGuard]
})
export class AppRoutingModule { }
