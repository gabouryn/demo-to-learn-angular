import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./../app.component.css'],
})
export class LandingComponent implements OnInit {
  title = 'nicole\'s demo app';
  constructor() { }

  ngOnInit(): void {
  }

}
