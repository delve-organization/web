import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'delve-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public readonly title = 'delve-frontend';

  constructor() {
  }

  ngOnInit(): void {
  }
}
