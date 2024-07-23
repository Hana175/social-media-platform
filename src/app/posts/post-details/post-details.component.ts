import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommentsResponse, Post, Comment } from '../view-list/posts.entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export default class PostDetailsComponent {
    apiBaseUrl = 'https://dummyjson.com/posts';
    //we need an object for posts and comments that we'll use in the html page to display posts and comments
    post?: Post;
    comments?: Comment[];
    //! means has to be defined, ? means it can be un/defined.

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    //dependency injection, we're injecting el httpclient
  }
  //ng on init is a lifecycle fe angular kol el logic byb2a gowaha
  ngOnInit(): void{
    //we need to subscribe lel activated router 3shan ngeeb el id mn el posts
    this.activatedRoute.paramMap.subscribe({
      //parameters of url el heya params
      //paramMap is an observable, which is something that changes with time
//I stopped at the end of video number 11 in the playlist
      next:  ,
      error:
    })
  }
  //3ayzeen nsubscribe el id bta3 el post mn 3enwano, nsubscribe el changes 3shan ngeb el post 7asab el id w el comments 7asab el id
  //fa hane3mel 2 http requests.
  getPostById(postId: string){//string aw number 7asab design el database
   //subscribe bta5od 2 things: next and error
    this.http
    .get<Post>(`{this.apiBaseUrl}/posts/${postId}`)
    .subscribe({
      next: (res)=>{
        this.post=res;
      },
    });//we need base url of dummy json and type el response mabein el <>
  }

  getPostCommentsById(postId: string){
    this.http
    .get<CommentsResponse>(`{this.apiBaseUrl}/posts/${postId}/comments`)
    .subscribe({
      next: (res) => {
        this.comments = res?.comments;
      },
     
    });

  }

}
