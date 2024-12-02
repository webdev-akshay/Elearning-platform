import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (users) => {
        if (users.length > 0) {
          this.router.navigate(['/home'])
          alert('Login Successful!');
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      (error) => {
        this.errorMessage = 'Server error. Please try again later.';
        console.error(error);
      }
    );
  }
  ngOnInit(): void {

  }
}
