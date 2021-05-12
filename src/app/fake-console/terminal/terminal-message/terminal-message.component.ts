import { Component, OnInit, Input } from '@angular/core';
import { SimpleMessage, Source } from '../../simple-message';

@Component({
  selector: 'terminal-message',
  templateUrl: './terminal-message.component.html',
  styleUrls: ['./terminal-message.component.css'],
})
export class TerminalMessageComponent implements OnInit {
  @Input() public newMsg: SimpleMessage | null;

  public allMessages: SimpleMessage[];

  public isSender(source: Source) {
    return source == Source.sender;
  }
  constructor() {
    this.newMsg = null;
    this.allMessages = [];
  }

  public ngOnInit(): void {}

  public ngOnChanges(change: SimpleMessage) {
    if (this.newMsg) {
      this.allMessages.push(this.newMsg);
    }
  }
}
