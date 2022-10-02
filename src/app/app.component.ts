import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-Directives';

  ary: any = ['asdf', 1, 'sdf'];

  article: { id: number, name: string }[] = [
    {"id": 0, "name": "Available"},
    {"id": 1, "name": "Ready"},
    {"id": 2, "name": "Started"}
  ];
}
