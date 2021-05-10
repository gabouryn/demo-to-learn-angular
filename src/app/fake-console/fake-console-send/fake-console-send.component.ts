import { Component, OnInit, Input } from '@angular/core';
import { SimpleMessage } from '../message.component';

@Component({
  selector: 'app-fake-console-send',
  template: `
  <pre class ="sentByMe">{{msg}}</pre>
  `,
  styleUrls: ['./fake-console-send.component.css']
})
export class FakeConsoleSendComponent implements OnInit {
  @Input() msg:string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
