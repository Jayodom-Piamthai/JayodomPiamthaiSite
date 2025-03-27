import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComptestComponent } from './component/comptest/comptest.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComptestComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-comptest>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'front';
}
