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