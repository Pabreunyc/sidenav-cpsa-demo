import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(null);
  public isLoggedIn$:Observable<boolean>;

  constructor() {
    this.isLoggedIn$ = this._isLoggedIn.pipe(
      tap( p => console.log(`this._isLoggedIn.tap: ${p}`) ),
      shareReplay()
    );
  }

  public loginState(state:boolean) {
    this._isLoggedIn.next(state);
  }
  public isLoggedIn():boolean {
    return this._isLoggedIn.value;
  }
  
}
