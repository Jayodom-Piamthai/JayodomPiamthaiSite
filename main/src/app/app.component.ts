import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontComponent } from './page/front/front.component';
import { CvComponent } from './page/cv/cv.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TopBarComponent],
  template: `
  bourgois
  <app-top-bar></app-top-bar>
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'main';
}
