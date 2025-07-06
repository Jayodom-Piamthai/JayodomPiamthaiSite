import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-top-bar',
  imports: [CounterComponent],
  templateUrl:'./top-bar.component.html',
  styles: ``
})
export class TopBarComponent {
  changeCv() {
    console.log('changeCv');
  }
}
