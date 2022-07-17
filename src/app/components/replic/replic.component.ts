import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Data } from 'src/app/interfaces/data.interface';
import { User } from 'src/app/interfaces/user.interfaces';
import { UserService } from 'src/app/services/user.service';
import { Replic } from '../../interfaces/replic.interfaces';
import { AppConfimationDelete } from '../confimation-delete/confimation-delete.component';
import { Comment } from '../../interfaces/comment.interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-replic',
  templateUrl: './replic.component.html',
  styleUrls: ['./replic.component.sass']
})
export class ReplicComponent implements OnInit {

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
  }

  @Input()replic:Replic={
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
    replyingTo:'',
    replies:[],
  };
  currentUser:User={
    username:'',
    image:
       {  
         png:'',
         webp:''
       } 
   }

  constructor(private dataService : DataService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getCurrentUser().subscribe((resp:User)=>{
      this.currentUser=resp
    }); 
  }
  public get canReplic() : boolean {
    return this.canReplie
  }
  modificarScore(i:number){
   
    this.replic.score=this.replic.score+i;

    if (this.replic.score<0) {
      this.replic.score=0;
    }

  }

  public get userDistinct() : boolean {
    return this.currentUser.username===this.replic.user.username
  }

  toggleEdit(){
    this.isEditClicked=!this.isEditClicked;
    this.textComment=this.replic.content;   
   
  }

  openReplic(){
    this.canReplie=!this.canReplie;
  }

  isEditMode():string{
    
    if ((this.userDistinct)&&(this.isEditClicked)) {
      return 'visible';
    }else{
      return 'no-visible';
    }
    
  }

  updateReplic(){   

    this.textComment=this.text.nativeElement.outerText;

    if (this.textComment!='') {

      this.replic.content=this.textComment;      
      this.toggleEdit();      
    }
    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(AppConfimationDelete,{
      width:'351px'  
    });

    dialogRef.afterClosed().subscribe((result)=>{
    
      if (result){
        const position= this.comment.replies?.indexOf(this.replic) || 0;
        this.comment.replies?.splice(position,1);
      }
      
    })

  
  }

  deleteReplic(){
    this.openDialog()
  }
}
