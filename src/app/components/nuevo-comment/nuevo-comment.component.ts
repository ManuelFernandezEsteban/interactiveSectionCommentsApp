import { Component, OnInit } from '@angular/core';

import { User } from '../../interfaces/user.interfaces';
import { Comment } from '../../interfaces/comment.interfaces';

import { DataService } from 'src/app/services/data.service';



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
  
  
  constructor(private dataService:DataService) { 
  }

  sendComment(){   


    if (document.querySelector('#comment')?.textContent!='') {
      
      const textComment= document.querySelector('#comment')?.textContent + '';
      const createdAt = new Date().getTime()+'';
      
      const newComment:Comment ={
        id: 0,
        content: textComment,
        createdAt: createdAt,
        score: 0,
        user: this.user,
        replies: []
      } 
      
      this.dataService.insertComment(newComment);
      document.querySelector('#comment')!.textContent='';
    }
    
  }

  ngOnInit(): void {
    
    this.dataService.getCurrentUser().subscribe((resp:User)=>{
      this.user=resp
    });   
  }

  

}
