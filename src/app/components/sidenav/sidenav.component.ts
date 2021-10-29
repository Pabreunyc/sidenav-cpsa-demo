import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
@ViewChild ('drawer', {static:false}) sideNavDrawer:MatSidenav;

  // Breakpoints.Handset
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      tap(console.log),
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
  // ---------------
  ngOnInit(): void {
    console.log('%cSidenavComponent', 'background:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cSidenavComponent', 'background:red;color:white');
  }
  ngAfterViewInit(): void {
    console.log('%cSidenavComponent', 'background:purple;color:white');
    console.log('this.sideNavDrawer', this.sideNavDrawer);
  }
// ============================================================================
  public onToggle() {
    this.sideNavDrawer.toggle();    
  }
}
