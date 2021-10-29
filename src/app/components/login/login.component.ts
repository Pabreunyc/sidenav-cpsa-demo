import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public checkLoggin:boolean;

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    this.checkLoggin = false;
    authService.loginState(false);
  }

  ngOnInit(): void {
    console.log('%cLoginComponent','background:green;color:white');
    console.log('loggedIn', this.authService.isLoggedIn());
  }

  toggleLogin(evt) {
    console.log('toggleLogin', this.checkLoggin);

    this.authService.loginState(this.checkLoggin);
    if(this.checkLoggin) {
      this.router.navigate(['/']);
    }    
  }
}
