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
      this.comments.sort(function(a,b){
        if (a.score>b.score){
          return -1
        }
        else if (a.score===b.score){
          return 0
        }
        return 1
        
      })
      this.commentsService.comments=resp;
    });
    
  }

}
