import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  testPromise = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  date$ = new Observable(observable => {
    setInterval(() => {
      observable.next(new Date());
    }, 1000);
  });
}
