import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { DraftPostComponent } from './draft-post/draft-post.component';

const routes: Routes = [
  {
    path: '', component: CreatePostComponent
  },
  {
    path: 'draft', component: DraftPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
