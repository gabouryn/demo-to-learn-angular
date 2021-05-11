import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { merge, interval, concat, Subject } from 'rxjs';
import { GetReceivedMsgService } from './get-received-msg.service';
import { SimpleMessage, Source } from './message.component';

@Component({
  selector: 'fake-console',
  templateUrl:'./fake-console.component.html',
  styleUrls: ['./fake-console.component.css']
})

export class FakeConsoleComponent implements OnInit {
  msg = new SimpleMessage('hi', Source.receiver);
  allMessages:SimpleMessage[] = [this.msg];
  
  addText = new Subject<SimpleMessage>();

  mergedData = merge(this.addText, this.receivedMsgService.getReceivedMessages());

  isSender(source:Source){
    return source == Source.sender;
  }

  isReceiver(source:Source){
    return source == Source.receiver;
  }

  @ViewChild('screen') private screen!: ElementRef;
  
  scrollToBottom() {
    this.screen.nativeElement.scrollTop = this.screen.nativeElement.scrollHeight;
  }

  constructor(private receivedMsgService:GetReceivedMsgService) { }

  ngOnInit(): void {
    this.mergedData.subscribe((msg:SimpleMessage)=> {this.allMessages.push(msg)
    this.scrollToBottom();
    });
  }


}
