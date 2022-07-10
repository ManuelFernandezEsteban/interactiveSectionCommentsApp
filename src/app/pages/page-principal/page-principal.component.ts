import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment.interfaces';


@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.sass']
})
export class PagePrincipalComponent implements OnInit {

  comments:Comment[]=[]

  constructor(private commentsService:CommentsService) { 

  }
  
  ngOnInit(): void {
    this.commentsService.getComments().subscribe(resp=>{
      this.comments=resp;
      this.commentsService.comments=resp;
    });
    
  }

}
