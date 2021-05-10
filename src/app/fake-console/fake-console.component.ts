import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetReceivedMsgService } from './get-received-msg.service';
import { SimpleMessage, Source } from './message.component';

@Component({
  selector: 'fake-console',
  template:`
  <div class="terminal" >
  <div class="scrollable">
  <div>
  <ng-container *ngFor="let message of messages">
    <app-fake-console-send *ngIf="isSender(message.source)" [msg]="message.text"></app-fake-console-send>
    <pre class="fromBot" *ngIf="isReceiver(message.source)">{{message.text}}</pre>
  </ng-container>
  </div>
  </div>
  <enter-text (enteredText)="addText($event)"></enter-text>
</div>
  `,
  styleUrls: ['./fake-console.component.css']
})

export class FakeConsoleComponent implements OnInit {
  public messages: SimpleMessage[] = [];

  addText(newMessage:SimpleMessage){
    this.messages.push(newMessage);
  }
  isSender(source:Source){
    return source == Source.sender;
  }

  isReceiver(source:Source){
    return source == Source.receiver;
  }
  
  constructor(private receivedMsgService:GetReceivedMsgService) { }

  ngOnInit(): void {
    this.messages.push(new SimpleMessage("hi", Source.receiver));
    this.receivedMsgService.getReceivedMessages()
    .subscribe(msg => this.messages.push(msg));
  }


}
