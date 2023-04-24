import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-unused-vars
  title(_title: any) : void {
    throw new Error('Method not implemented.');
  }
  constructor() {}
}
