import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { Comment } from '../interfaces/comment.interfaces';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../interfaces/data.interface';

const url:string=environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentUser:User = {
    username:'',
    image:
       {  
         png:'',
         webp:''
       } 
   };

   public comments:Comment[]=[];

  constructor(private http:HttpClient) { }

  getCurrentUser():Observable<User>{

    return this.http.get<Data>(url).pipe(
      map(x=>x.currentUser)
    )
   
  }

  getLastId():number{
    let mayor=0;
    this.comments.forEach(comment => {
      if (comment.id>mayor){
        mayor=comment.id;
      }
    });
    return mayor;
  }

  insertComment(comment:Comment){
    const idComment=this.getLastId();
    comment.id=idComment+1;
    this.comments.push(comment);
    this.dataPersist();
  }

  deleteComment(comment:Comment){
    
    const position =  this.comments.indexOf(comment);
    this.comments.splice(position,1);
    this.dataPersist();
  }


  getComments(){

    return this.http.get<Data>(url).pipe(
      map(x=>x.comments)      
    )

  }

  dataPersist(){    

    const data:Data = {currentUser:this.currentUser,
                       comments:this.comments}
    const dataString:string = JSON.stringify(data);
    localStorage.setItem('comments',dataString);
  }

}
