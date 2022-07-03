import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const url:string=environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  constructor(private http:HttpClient) {     
  }

  getCurrentUser():Observable<Data>{
    
    return this.http.get<Data>(url);
  }
}
