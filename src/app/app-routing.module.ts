import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NextpageComponent} from './nextpage/nextpage.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'nextpage', component: NextpageComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
