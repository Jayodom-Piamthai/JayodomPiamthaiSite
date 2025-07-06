import { Component,input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  count = input('counter unavailable');
}
