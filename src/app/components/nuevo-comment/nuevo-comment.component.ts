import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';
import { Data } from '../../interfaces/data.interface';


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
  
  
  constructor(private userService:UserService) { 
  }

  sendComment(){
    //todo servicio de comments   

    if (document.querySelector('#comment')?.textContent!=='') {
      const textComment=document.querySelector('#comment')?.textContent;
      //todo llamar al servicio para crear un nuevo comentario
    }
    
  }

  ngOnInit(): void {
    
    this.userService.getCurrentUser().subscribe((resp:Data)=>{
      this.user=resp.currentUser
    });   
  }

  

}
