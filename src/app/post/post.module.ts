import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostRoutingModule } from './post-routing.module';
import { DraftPostComponent } from './draft-post/draft-post.component';


@NgModule({
  declarations: [
   CreatePostComponent,
    DraftPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
