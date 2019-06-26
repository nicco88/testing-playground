import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Data {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private TestDataObservable$ = new BehaviorSubject<Data[]>([]);
  private TestDataObservable = this.TestDataObservable$.asObservable();

  constructor() { }

  GetData() {
    return this.TestDataObservable;
  }

  UpdateData() {
    const _temp: Array<Data> = [];
    for (let i: number ; i < 20 ; i++) {
      _temp.push({
        id: i,
        name: `Name ${i}`,
      });
    }
    this.TestDataObservable$.next(_temp);
  }
}
