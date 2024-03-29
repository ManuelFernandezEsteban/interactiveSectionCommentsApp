import { Component, OnInit } from '@angular/core';

import { Comment } from '../../interfaces/comment.interfaces';
import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/data.interface';




@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.sass']
})
export class PagePrincipalComponent implements OnInit {

  comments: Comment[] = []

  constructor(private dataService: DataService) {

  }



  ngOnInit(): void {

    if (localStorage.getItem('comments')) {
      const dataString = localStorage.getItem('comments') || '';
      const data: Data = JSON.parse(dataString);
      this.comments = data.comments;
      this.dataService.comments = this.comments;
      
    } else {

      this.dataService.getComments().subscribe(resp => {
        this.comments = resp;
        this.comments.sort(function (a, b) {
          if (a.score > b.score) {
            return -1
          }
          else if (a.score === b.score) {
            return 0
          }
          return 1

        })
        this.dataService.comments = resp;
        this.dataService.comments = this.comments;
      });
    }

  }

}
