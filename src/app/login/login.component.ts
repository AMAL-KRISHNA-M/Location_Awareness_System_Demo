import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    // check if the username and password are correct
    if (this.username === 'admin' && this.password === 'password') {
      // navigate to the home component
      this.router.navigate(['/home']);
    } else {
      alert("Wrong credentials dude!!!!")
    }
  }
}
