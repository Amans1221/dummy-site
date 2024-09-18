import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { DraftPostComponent } from './draft-post/draft-post.component';
import { PollPostComponent } from './Poll-post/poll-post/poll-post.component';
import { PostSurveysComponent } from './post-surveys/post-surveys.component';

const routes: Routes = [
  {
    path: 'createpost', component: CreatePostComponent
  },
  {
    path: 'draft', component: DraftPostComponent
  },
  {
    path: 'poll', component: PollPostComponent
  },
  {
    path: 'surveys', component: PostSurveysComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
