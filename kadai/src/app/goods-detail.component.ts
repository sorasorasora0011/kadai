import { Component, } from '@angular/core';
import { OnInit } from '@angular/core';

import { Goods } from './goods';
import { GoodsService } from './goods.service';

@Component({
  selector: 'goods-detail',
  template: `
    <table>
      <h1>{{title}}</h1>
      <tr>{{category}}</tr>
      <ng-container *ngFor="let goods of goodsList">
        <tr>
          <td  rowspan="2">
            {{goods.icon}}
          </td>
          <td>
            {{goods.name}}
          </td>
        </tr>
        <tr>
          <td>
            {{goods.year}}
          </td>
        </tr>
      </ng-container>
    </table>
  `,
  providers: [GoodsService]
})
export class GoodsDetailComponent {
  title = '商品一覧';
  category = '商材１';
  goodsList: GOODS[];
  
  constructor(private goodsService: GoodsService) { }
  
  getGoods(): void {
    this.goodsService.getGoods().then(goods => this.goodsList = goods);
  }
  
  ngOnInit(): void {
    this.getGoods();
  }
}