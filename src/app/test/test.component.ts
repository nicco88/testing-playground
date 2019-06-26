import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carOne = {
    wheels: 4,
    color: 'blue'
  };

  carTwo = {
    wheels: 4,
    color: 'blue'
  };

  arrOne = [1, 2, 3];
  arrTwo = [1, 2, 3];
  numOne = 3.1415;
  numTwo = 3.1419;
  zero = 0;

  add(a: number, b: number): number {
    return a + b;
  }




}
