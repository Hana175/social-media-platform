import { Routes } from '@angular/router';

export const routes: Routes = [
    {

    path:'posts',
    loadComponent:()=>import('./posts/view-list/view-list.component')
}
];
