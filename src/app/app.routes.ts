import { Routes } from '@angular/router';

export const routes: Routes = [
    {

    path:'posts',
    loadComponent:()=>import('./posts/view-list/view-list.component')
},


{
//law 3andena post b id haywadeena 3and el component bta3na
//since we export default, there is no need for .then()
    path:'posts/:id',
    //el id byetghayar fa me7tageen nsubscribe lel id, me7tageen nesta5dem el 
    // activate routes using dependency injection gowa el constructor
    loadComponent:()=>import('./posts/post-details/post-details.component')
},
];
