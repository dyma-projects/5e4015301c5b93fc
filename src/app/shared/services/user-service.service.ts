import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  constructor() { }

   userData = this.users.asObservable();



   addUser(user: string) {
      const currentValue = this.users.value;
      const updatedValue = [...currentValue, user];
      this.users.next(updatedValue);

  }

}
