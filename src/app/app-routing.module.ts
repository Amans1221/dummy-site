import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'login', redirectTo: 'login', pathMatch: "full",
    
  },
  {
    path: '', component: LayoutComponent,
    data: {
      title: 'dashboard'
    },
    children: [
      {
        path: 'home', loadChildren: () => import('./Home/home.module').then(x => x.HomeModule)
      },
      {
        path: 'post', loadChildren: () => import('./post/post.module').then(x => x.PostModule)
      },
    
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'createpost', component: CreatePostComponent },
  // { path: 'draftpost', component: DraftPostComponent }
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
