import { Injectable } from '@angular/core';

import { User } from './user';
import { USER } from './mock-user';

@Injectable()
export class UserService {
  getUser(): Promise<User[]> {
    return Promise.resolve(USER);
  }
}