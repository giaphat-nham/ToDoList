import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  A=10;
  name ="Tuandeptrai";
  colorText="color:blue";
  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }
  showMessage(){
    alert("ahihi");
  }

  goToHomepage(){
    this.router.navigate(['/homepage']);
  }

  up(){
    this.A++;
  }

  checkName(){
    alert(this.name);
  }
}
