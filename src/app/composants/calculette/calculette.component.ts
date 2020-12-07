import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num1: number;
  num2: number;
  res: number;


  sum() {
    this.res = this.num1 + this.num2;

  }

  diff() {
    this.res = this.num1 - this.num2;

  }
  mult() {
    this.res = this.num1 * this.num2;

  }
  div() {
    this.res = this.num1 / this.num2;

  }
}
