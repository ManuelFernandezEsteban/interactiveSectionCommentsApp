import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url:string=environment.url;

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getComments():Observable<Data>{
    
    return this.http.get<Data>(url);
  }
}
