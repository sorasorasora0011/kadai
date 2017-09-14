import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-detail',
  template: `
    <table>
      <h1>{{title}}</h1>
      <tr>{{category}}</tr>
      <ng-container *ngFor="let user of userList">
        <tr>
          <td  rowspan="2">
            {{user.icon}}
          </td>
          <td>
            {{user.name}}
          </td>
        </tr>
        <tr>
          <td>
            {{user.year}}
          </td>
        </tr>
      </ng-container>
    </table>
  `,
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  title = 'ユーザ一覧';
  category = '社員';
  userList: User[];
  
  constructor(private userService: UserService) { }
  
  getUser(): void {
    this.userService.getUser().then(user => this.userList = user);
  }
  
  ngOnInit(): void {
    this.getUser();
  }
}