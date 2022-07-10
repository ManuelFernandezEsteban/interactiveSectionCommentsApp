import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';
import { Comment } from '../../interfaces/comment.interfaces';
import { CommentsService } from '../../services/comments.service';



@Component({
  selector: 'app-nuevo-comment',
  templateUrl: './nuevo-comment.component.html',
  styleUrls: ['./nuevo-comment.component.sass']
})
export class NuevoCommentComponent implements OnInit {

  user:User={
             username:'',
             image:
                {  
                  png:'',
                  webp:''
                } 
            };
  
  
  constructor(private userService:UserService,
              private commentService:CommentsService) { 
  }

  sendComment(){   


    if (document.querySelector('#comment')?.textContent!='') {
      
      const textComment= document.querySelector('#comment')?.textContent + '';
      
      const newComment:Comment ={
        id: 0,
        content: textComment,
        createdAt: 'now',
        score: 0,
        user: this.user,
        replies: []
      } 
      
      this.commentService.insertComment(newComment);
      document.querySelector('#comment')!.textContent='';
    }
    
  }

  ngOnInit(): void {
    
    this.userService.getCurrentUser().subscribe((resp:User)=>{
      this.user=resp
    });   
  }

  

}
