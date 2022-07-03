import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment.interfaces';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';
import { Data } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input()comment:Comment={
    id:0,
    content:'',
    createdAt:'',
    score:0,
    user:{
      username:'',
      image:
         {  
           png:'',
           webp:''
         } 
     },
    replies:[],
  };
  currentUser:User={
    username:'',
    image:
       {  
         png:'',
         webp:''
       } 
   };

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((resp:Data)=>{
      this.currentUser=resp.currentUser
    });     
  }

}
