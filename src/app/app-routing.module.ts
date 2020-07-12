import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { ResultsComponent } from './results/results.component';


const  routes: Routes = [  
  {
    path:"",
    component: VoteComponent,
  },
  {
    path:"Vote",
    component: VoteComponent,
  },{
    path:"Results",
    component: ResultsComponent,    
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
