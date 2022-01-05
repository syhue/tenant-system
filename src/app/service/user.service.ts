import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  tenantInfo: Tenant[] = [
    {
      id: 1,
      name: 'Elizabeth',
      gender: Gender.Female
    },
    {
      id: 2,
      name: 'Isaiah',
      gender: Gender.Male
    },
    {
      id: 3,
      name: 'Katie',
      gender: Gender.Female
    },
    {
      id: 4,
      name: 'Grace',
      gender: Gender.Female
    },
    {
      id: 5,
      name: 'Eugene',
      gender: Gender.Male
    },
    {
      id: 6,
      name: 'Alex',
      gender: Gender.Male
    },
    {
      id: 7,
      name: 'Desmond',
      gender: Gender.Male
    },
    {
      id: 8,
      name: 'Niki',
      gender: Gender.Female
    },
    {
      id: 10,
      name: 'Richard',
      gender: Gender.Male
    },
    {
      id: 11,
      name: 'Rose',
      gender: Gender.Female
    },
    {
      id: 12,
      name: 'Sook Yan',
      gender: Gender.Female
    },
  ];

  getTenantDetails(tenantId: number): Tenant {
    const data = this.tenantInfo.find(d => d.id - tenantId === 0);
    return <Tenant>(data);
  }
}

export interface Tenant {
  id: number,
  name: string,
  gender: Gender
}


enum Gender {
  Male = 'Male',
  Female = 'Female'
}
