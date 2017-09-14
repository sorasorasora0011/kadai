import { Injectable } from '@angular/core';

import { Company } from './company';
import { COMPANY } from './mock-company';

@Injectable()
export class CompanyService {
  getCompany(): Promise<Company[]> {
    return Promise.resolve(COMPANY);
  }
}