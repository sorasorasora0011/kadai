import { Component } from '@angular/core';

import { Menu } from './menu';

const MENUES: Menu[] = [
  { id: '1', name: 'ユーザ一覧' },
  { id: '2', name: '会社一覧' },
  { id: '3', name: '商品一覧' }
];

@Component({
  selector: 'my-app',
  template: `
  <table>
    <tr>
      <td colspan="2">
        <h1>{{title}}</h1>
      </td>
    </tr>
    <tr>
      <td valign="top">
          <ul class="menues">
            <li *ngFor="let menu of menues"
              (click)="onSelect(menu.id)"
            >
              <span>{{menu.name}}</span>
            </li>
          </ul>
      </td>
      <td>
        <user-detail *ngIf="selectedId == '1'"></user-detail>
        <company-detail *ngIf="selectedId == '2'"></company-detail>
        <goods-detail *ngIf="selectedId == '3'"></goods-detail>
      </td>
    </tr>
  </table>
  `,
  styles: [`
    .menues {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
    }
    .menues li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #A9D0F5;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
  `]
})
export class AppComponent {
  title = 'アプリケーション';
  menues = MENUES;
  selectedId: string;
  
  onSelect(id: string) {
    this.selectedId = id;
  }
}
