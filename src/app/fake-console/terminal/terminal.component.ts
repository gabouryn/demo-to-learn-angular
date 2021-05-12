import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { GetReceivedMsgService } from '../get-received-msg.service';
import { SimpleMessage } from '../messageI.component';

@Component({
  selector: 'terminal',
  templateUrl:'./terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent implements OnInit {
  public msg!:SimpleMessage;
  private addText = new Subject<SimpleMessage>();

  mergedData = merge(this.addText, this.receivedMsgService.getReceivedMessages());

  public addUserText(event:SimpleMessage){
    this.addText.next(event);
  }

  @ViewChild('screen') private screen!: ElementRef;
  
  scrollToBottom() {
    this.screen.nativeElement.scrollTop = this.screen.nativeElement.scrollHeight;
  }

  constructor(private receivedMsgService:GetReceivedMsgService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

}
