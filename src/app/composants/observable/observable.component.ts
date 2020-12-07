import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, of , merge ,interval, Subscription, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit ,OnDestroy{
  status = '';
  tab: Array<number> = [];
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    const observable: Observable<number> = timer (3000, 1000);
    this.subscription = observable.subscribe(
    (value) => { this.tab.push(value); },
    (error) => { this.status = error; },
    () => { this.status = 'fini'; }
    );
    }
    ngOnDestroy() { this.subscription.unsubscribe(); }
  /*
  ngOnInit() {
    const tableau = [1, 2, 3];
    const observable: Observable <number> = from(tableau);
    subscription: Subscription;
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }
  */
}
