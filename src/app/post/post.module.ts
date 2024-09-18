import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostRoutingModule } from './post-routing.module';
import { DraftPostComponent } from './draft-post/draft-post.component';
import { PollPostComponent } from './Poll-post/poll-post/poll-post.component';
import { PostSurveysComponent } from './post-surveys/post-surveys.component';


@NgModule({
  declarations: [
   CreatePostComponent,
    DraftPostComponent,
    PollPostComponent,
    PostSurveysComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
