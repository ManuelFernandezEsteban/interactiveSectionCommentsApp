import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoCommentComponent } from './nuevo-comment/nuevo-comment.component';
import { CommentComponent } from './comment/comment.component';
import { ReplicComponent } from './replic/replic.component';
import { NewReplicComponent } from './new-replic/new-replic.component';
import { AppConfimationDelete } from './confimation-delete/confimation-delete.component';


@NgModule({
  declarations: [
    NuevoCommentComponent,
    CommentComponent,
    ReplicComponent,
    NewReplicComponent,
    AppConfimationDelete,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NuevoCommentComponent,
    CommentComponent,
    ReplicComponent

  ]
})
export class ComponentsModule { }
