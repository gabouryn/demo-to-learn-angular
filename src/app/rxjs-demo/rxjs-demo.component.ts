import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {SingleDemoService} from '../single-demo.service'

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./../app.component.css'],
})
export class RxjsDemoComponent implements OnInit {
  dataValue:number = 0; 

   constructor(private demoService: SingleDemoService) {
   }

   // eslint-disable-next-line class-methods-use-this
   ngOnInit(): void {
     let subscription = this.getData();
     setTimeout(()=>{
       subscription.unsubscribe();
     },11000);

   }

   getData():Subscription{
     return this.demoService.getObservable()
     .subscribe(v => this.dataValue = v);
   }
}
