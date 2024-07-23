import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../view-list/posts.entity';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export default class PostDetailsComponent {
    apiBaseUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {
    //dependency injection, we're injecting el httpclient
  }
  //3ayzeen nsubscribe el id bta3 el post mn 3enwano, nsubscribe el changes 3shan ngeb el post 7asab el id w el comments 7asab el id
  //fa hane3mel 2 http requests.
  getPostById(postId: string){//string aw number 7asab design el database
    this.http.get<Post>(`{this.apiBaseUrl}/posts/${postId}`);//we need base url of dummy json and type el response mabein el <>
  }

  getPostCommentsById(postId: string){
    this.http.get<>('https://dummyjson.com/posts').subscribe({
    });

  }

}
