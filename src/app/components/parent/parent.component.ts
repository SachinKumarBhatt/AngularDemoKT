import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number;
  message: string;

  constructor() { }

  ngOnInit() {
    this.parentCount = 10;
    this.message = `Child count initialized to ${this.parentCount}`; //this is called template string we can inject value in string variable.
  }

  onCountChanged(eventData) {
    this.parentCount = eventData;
    this.message = `Child count changed to ${this.parentCount}`;
  }
}
