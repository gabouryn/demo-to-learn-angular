import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-console',
  template: `
  <div class="content" role="main">
    <div style="max-width:600px">
      <h2 >Welcome to the impossible conversation... cause the bot will just spout nothing</h2>
      <fake-console></fake-console>
    </div>
  </div>
  `,
  styleUrls: ['./../app.component.css']
})
export class FakeConsoleLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
