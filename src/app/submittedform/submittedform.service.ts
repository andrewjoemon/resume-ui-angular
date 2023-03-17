import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmittedformService {

  constructor(private http:HttpClient) { }
  submission(submitting:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',submitting)
  }
}
