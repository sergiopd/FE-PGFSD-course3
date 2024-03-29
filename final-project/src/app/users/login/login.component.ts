import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
  ) {}

  onSubmit() {
    this.authService.verifyLogin(this.email, this.password);
  }
}
