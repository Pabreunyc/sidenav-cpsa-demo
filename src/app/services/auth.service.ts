import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

interface IPerson {
  id:number;
  name: string;
}
class Person implements IPerson{
  id: number = 0;
  name: string = '';
}
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
  
  newPerson(body: Person): Observable<Person> {
    return this.httpService.post('/people', JSON.stringify(body)).pipe
      map(value => Object.assign(new Person(), value)
    );
  }
}
