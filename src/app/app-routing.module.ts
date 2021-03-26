import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundCoverComponent } from "./background-cover/background-cover.component"
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
const routes: Routes = [
  {
    path : 'Home', component : BackgroundCoverComponent
  },
 {
   path : 'Login', component : LoginComponent
 },
 {
  path : 'Register', component : RegisterComponent
},
{
  path : '', component : BackgroundCoverComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
