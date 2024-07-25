import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { Post, Response } from './posts.entity';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.scss'
})
export default class ViewListComponent { //export default badal ma nerga3 ne3mel then fel router outlet THIS is called LAZY LOADING msh beyload gher lama el user ye5osh fel 7eta de badal ma el app yeb2a batee2

  data?:Post[]; //?: property can be undefined.

  constructor(private http: HttpClient) { //dependency injection
  }

  ngOnInit():void {
    this.http.get<Response>('https://dummyjson.com/posts').subscribe({
      next: (res) =>{
        console.log({res}); //res is the response from the server
        this.data = res.posts; //resource.posts

      },
      error:(err)=>{
        console.error(err); //not the best pracitces but for now.
      },
    });
  } //this above is hard coded for time 
}
