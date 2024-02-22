import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  onLogin() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == 12345) {
      this.router.navigate(['/products']);
    } else {
      alert('Please enter valid credentials');
    }
  }

  loginObj: any = {
    username: '',
    password: '',
  };
}
