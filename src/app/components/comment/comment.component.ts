import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../../interfaces/comment.interfaces';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';
import {MatDialog} from '@angular/material/dialog';
import { AppConfimationDelete } from '../confimation-delete/confimation-delete.component';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  confirmation:boolean=false;

  @ViewChild('text')
  text!: ElementRef;

  isEditClicked:boolean=false;
  canReplie:boolean=false;
  textComment:string='';

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

  constructor(private userService : UserService,
              private commentService:CommentsService,
              public dialog:MatDialog) { 
    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(AppConfimationDelete,{
      width:'351px'  
    });

    dialogRef.afterClosed().subscribe((result)=>{
    
      if (result){
        this.commentService.deleteComment(this.comment);
      }
      
    })

  
  }

  
  public get userDistinct() : boolean {
    return this.currentUser.username===this.comment.user.username
  }
  

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((resp:User)=>{
      this.currentUser=resp
    });    
    
  }

  modificarScore(i:number){
   
    this.comment.score=this.comment.score+i;

    if (this.comment.score<0) {
      this.comment.score=0;
    }

  }

  toggleEdit(){
    this.isEditClicked=!this.isEditClicked;
    this.textComment=this.comment.content; 
    console.log(this.isEditClicked)
   
  }

  isEditMode():string{
    
    if ((this.userDistinct)&&(this.isEditClicked)) {
      return 'visible';
    }else{
      return 'no-visible';
    }
    
  }

  updateComment(){   

    this.textComment=this.text.nativeElement.outerText;

    if (this.textComment!='') {

      this.comment.content=this.textComment;      
      this.toggleEdit();      
    }
    
  }
  
  public get canReplic() : boolean {
    return this.canReplie;
  }
  

  openReplic(){
    this.canReplie=!this.canReplie;
  }

  deleteComment(){
    
    this.openDialog();
    

  }

}
