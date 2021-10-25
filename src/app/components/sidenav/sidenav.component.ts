import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements ngAfterViewinit {
@ViewChild ('drawer', {static:false}) sideNavDrawer:ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  loginStatus:boolean;
  constructor(
    private authService:AuthService,
    private breakpointObserver: BreakpointObserver

  ) {
    authService.isLoggedIn$.subscribe(
      (s) => this.loginStatus = s,
      (e) => console.log('SidenavComponent.loginStatus.Err', e),
      () => console.log('-- Complete --')
    );
  }

}
