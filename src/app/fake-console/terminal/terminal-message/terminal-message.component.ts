import { Component, OnInit, Input } from '@angular/core';
import { SimpleMessage, Source } from '../../messageI.component';

@Component({
  selector: 'terminal-message',
  template: `
    <ng-container *ngFor="let message of allMessages">
      <pre class="sentByMe" *ngIf="isSender(message.source)">{{message.text}}</pre>
      <pre class="sentFromElsewhere" *ngIf="!isSender(message.source)">{{message.text}}</pre>
    </ng-container>
  `,
  styleUrls: ['./terminal-message.component.css']
})
export class TerminalMessageComponent implements OnInit {
  @Input() public newMsg:SimpleMessage|null;

  public allMessages:SimpleMessage[];

  public isSender(source:Source){
    return source == Source.sender;
  }
  constructor() { 
    this.newMsg = null;
    this.allMessages = [];
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(change:SimpleMessage){
    if(this.newMsg){
      this.allMessages.push(this.newMsg);
    }
    
  }

}
