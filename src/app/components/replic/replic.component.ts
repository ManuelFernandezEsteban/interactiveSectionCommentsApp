import { Component, Input, OnInit } from '@angular/core';
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
    this.userService.getCurrentUser().subscribe((resp:Data)=>{
      this.currentUser=resp.currentUser
    }); 
  }

}