import { SimpleMessage, Source } from './message.component';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'enter-text',
    template: `
      <input class="console-input" placeholder = "Message..." type = "text" #box (keyup.enter)="onEnter(box.value)" name="box" \[(ngModel)\]="boxValue">
    `,
    styleUrls: ['./fake-console.component.css']
  })
  
  export class EnterTextComponent {
    
    boxValue: string = '';
    value = '';

    @Output() enteredText = new EventEmitter<SimpleMessage>();

    sendEnteredTextToParent(value:string){
      this.enteredText.emit(new SimpleMessage(value, Source.sender));
    }

    onEnter(value: string) { 
      this.sendEnteredTextToParent(value);
      this.clear();
    }

    clear(){
      this.boxValue='';
    }

  }