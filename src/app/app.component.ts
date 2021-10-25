import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sidenav';
  public isL:Observable<boolean>;

  constructor( private authService:AuthService) {
    this.isL = authService.isLoggedIn$;
  }
  ngOnInit(): void {
    console.log('%cAppComponent', 'background:green;color:white')
  }
}
