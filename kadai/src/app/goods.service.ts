import { Injectable } from '@angular/core';

import { Goods } from './goods';
import { GOODS } from './mock-goods';

@Injectable()
export class GoodsService {
  getGoods(): Promise<Goods[]> {
    return Promise.resolve(GOODS);
  }
}