import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment.interfaces';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';
import { Replic } from '../../interfaces/replic.interfaces';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {


  canReplie:boolean=false;

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

  constructor(private userService : UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((resp:User)=>{
      this.currentUser=resp
    });     
  }




  
  public get canReplic() : boolean {
    return this.canReplie
  }
  

  openReplic(){
    this.canReplie=!this.canReplie;
  }

}
