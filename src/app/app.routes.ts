import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
  {path: '', component: LoginComponent}, // page default
  {path: 'homepage', component: HomepageComponent},
  {path: 'register', component: RegisterComponent}
];
