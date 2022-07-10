import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Data } from 'src/app/interfaces/data.interface';
import { User } from 'src/app/interfaces/user.interfaces';
import { UserService } from 'src/app/services/user.service';
import { Replic } from '../../interfaces/replic.interfaces';

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

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((resp:User)=>{
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
}
