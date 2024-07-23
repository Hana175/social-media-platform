export interface Post{
id: string;
title: string;
body: string;
userId: number;
tags: string[];
reactions: number;
}
//el properties betetgab mn el backend w
// hana5odha mn dummyjson.com/posts

export interface Response{
    posts: Post[];
    total: number;// pagination
    skip: number;
    limit: number;

}

export interface Comment{
    id: number;
    body: string;
    postId: string;
    user:{
        id:number;
        username: string;
    } 
}

export interface CommentsResponse{//gowaha el array of posts aw comments as T
    comments: Comment[];
    total: number;// pagination
    skip: number;
    limit: number;
}