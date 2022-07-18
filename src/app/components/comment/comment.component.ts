import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../../interfaces/comment.interfaces';

import { User } from '../../interfaces/user.interfaces';
import {MatDialog} from '@angular/material/dialog';
import { AppConfimationDelete } from '../confimation-delete/confimation-delete.component';

import { DataService } from '../../services/data.service';

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

  constructor(private dataService : DataService,              
              public dialog:MatDialog) { 
    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(AppConfimationDelete,{
      width:'351px'  
    });

    dialogRef.afterClosed().subscribe((result)=>{
    
      if (result){
        this.dataService.deleteComment(this.comment);
      }
      
    })

  
  }

  
  public get userDistinct() : boolean {
    return this.currentUser.username===this.comment.user.username
  }
  

  ngOnInit(): void {
    this.dataService.getCurrentUser().subscribe((resp:User)=>{
      this.currentUser=resp
      this.dataService.currentUser=resp;
    });    
    
  }

  modificarScore(i:number){
   
    this.comment.score=this.comment.score+i;
    if (this.comment.score<0) {
      this.comment.score=0;
    }
    this.dataService.dataPersist();
  }

  toggleEdit(){
    this.isEditClicked=!this.isEditClicked;
    this.textComment=this.comment.content; 
  
   
  }
  isNotEditMode():string{
    
    if ((this.userDistinct)&&(this.isEditClicked)) {
      return 'no-visible';
    }else{
      return 'visible';
    }
    
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
    this.dataService.dataPersist();
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
