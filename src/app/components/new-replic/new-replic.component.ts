import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';
import { Comment } from '../../interfaces/comment.interfaces';
import { Replic } from 'src/app/interfaces/replic.interfaces';
import { AstTransformer } from '@angular/compiler';

@Component({
  selector: 'app-new-replic',
  templateUrl: './new-replic.component.html',
  styleUrls: ['./new-replic.component.sass']
})
export class NewReplicComponent implements OnInit {

  @Input()currentUser!:User;
  @Input()replies!:Replic[];
  @Input()replie!:Replic;
  @Input()comment!:Comment;
  @Output()enviada=new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  
  agregarReplica(){
    if (document.querySelector('#replic')?.textContent!='') {
      
      const textComment= document.querySelector('#replic')?.textContent + ''; 
      let id:number=0;
      let replyingTo:string='';
      if(this.replies!=undefined){
        id=this.replies.length;
      }
      if (this.replie!=undefined){
        replyingTo=this.replie.user.username;
      }else{
        replyingTo=this.comment.user.username;
      }

      const createdAt = new Date().getTime()+'';

      const newReplic:Replic ={
        id: id+1,
        content: textComment,
        createdAt: createdAt,
        score: 0,
        user:this.currentUser,
        replies:[],
        replyingTo:replyingTo
      }

      if (this.replie!=undefined) {
        if (this.replie.replies===undefined){
          this.replie.replies=[];
        }
        this.replie.replies.push(newReplic);
      }else{
        this.replies!.push(newReplic);
      } 

      
      document.querySelector('#replic')!.textContent='';
      console.log(this.replie)
      this.enviada.emit(true);
    }
  }
}
