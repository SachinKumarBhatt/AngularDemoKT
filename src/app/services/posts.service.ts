import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Post } from '../models/post.model';

const httpOptions = {
  //for httpHeader
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl, httpOptions);
    
  }

  //getPostswithoutObservable(): Post[] {
    //return this.http.get<Post[]>(this.postsUrl, httpOptions);
  //}
   savePost(post: Post): Observable<Post> {
    this.http.put<Post>(this.postsUrl,post,httpOptions);
    this.http.delete<Post>(this.postsUrl,httpOptions);
     return this.http.post<Post>(this.postsUrl, post, httpOptions);
   }

   putPost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.postsUrl,post,httpOptions);
   }
   deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.postsUrl,httpOptions);
     
   }
}
