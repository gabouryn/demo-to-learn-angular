import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleDemoService {

  constructor() { }

  getObservable(): Observable<number>{
    return interval(1000);
  }
}
