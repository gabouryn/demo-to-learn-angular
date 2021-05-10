import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay, concatMap} from 'rxjs/operators';
import { SimpleMessage, Source } from './message.component';

@Injectable({
  providedIn: 'root'
})
export class GetReceivedMsgService {
  private sampleMessages:string[] = ["bonjour","hola", "how's it going", "did you see the news", "i like cookies too", "don't have many topics", "bye"];
  public receivedMessageMock:SimpleMessage[] = [];

  constructor() { 
    this.sampleMessages.forEach(msg => {
      this.receivedMessageMock.push(new SimpleMessage(msg,Source.receiver))
    })
  }
  getReceivedMessages():Observable<SimpleMessage>{
    return from(this.receivedMessageMock).pipe(concatMap(singleMsg => of(singleMsg).pipe(delay(Math.floor(Math.random()*10000)))));

  }
}
