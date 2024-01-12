import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { FoglalasokFelviteleComponent } from './foglalasok-felvitele/foglalasok-felvitele.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'foglalasok', component:FoglalasokComponent},
  {path:'foglalasok-felvitele', component:FoglalasokFelviteleComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
