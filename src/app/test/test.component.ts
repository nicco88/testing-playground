import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  posts: Array<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.getPostsQuery$()
    //   .subscribe(
    //     (data: any[]) => this.posts = data
    //   )
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

  totalVotes: number = 0;
  voteChanged = new EventEmitter<number>();


  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
  }

  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  getPostsQuery$() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  compute(n) {
    if (n < 0) return 0;
    return n + 1;
  }

  greet(name) {
    return `Welcome ${ name }!!!`
  }

  getCurrencies() {
    return ['TWD', 'EUR', 'USD'];
  }



}
