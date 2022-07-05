import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';
import { Comment } from '../../interfaces/comment.interfaces';
import { Replic } from 'src/app/interfaces/replic.interfaces';

@Component({
  selector: 'app-new-replic',
  templateUrl: './new-replic.component.html',
  styleUrls: ['./new-replic.component.sass']
})
export class NewReplicComponent implements OnInit {

  @Input()currentUser!:User;
  @Input()comment!:any;
  @Output()enviada=new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }
  agregarReplica(){
    if (document.querySelector('#replic')?.textContent!='') {
      
      const textComment= document.querySelector('#replic')?.textContent + '';
      if (this.comment.replies===undefined){
        this.comment.replies=[];
      }

      const newReplic:Replic ={
        id: this.comment.replies!.length+1,
        content: textComment,
        createdAt: 'now',
        score: 0,
        user:this.currentUser,
        replyingTo:this.comment.user.username
      } 
      this.comment.replies!.push(newReplic);
      document.querySelector('#replic')!.textContent='';
      this.enviada.emit(true);
    }
  }
}
