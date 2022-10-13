import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HistoryComponent } from '../history/history.component';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
    children:[{
      path:'',
      redirectTo:'Home',
      pathMatch:'full'
    },
    {path:'Home',component:HomeComponent},
    {path:'History',component:HistoryComponent}
  ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
