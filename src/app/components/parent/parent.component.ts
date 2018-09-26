import { Component, OnInit } from '@angular/core';
import {Actor} from '../../models/actor.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number;
  message: string;
  //actors : Actor[];
  newActor: Actor;
  newActorDisplay:string;

  constructor() { }

  ngOnInit() {
    this.parentCount = 10;
    this.message = `Child count initialized to ${this.parentCount}`; //this is called template string we can inject value in string variable.
    //This is used to display all actor with new add actor
    /**this.actors = [
      {name: 'Ami',city :'mumbai',age:12},
      {name:'komal',city :'chennai',age:10},
      {name:'priyanka',city:'hollywood',age:15},
      {name:'dixit',city:'mumbai',age:16},
      {name:'rajnikant',city:'banlore',age:18}
    ];*/
    this.newActor={name:'',city:'',age:0};
  
  }

  onCountChanged(eventData) {
    this.parentCount = eventData;
    this.message = `Child count changed to ${this.parentCount}`;
  }
  updateActorList(eventDate){
     //This is used to display all actor with new add actor
    this.newActor = eventDate;
   // this.actors.push(this.newActor);

   //This is for display only added actor
   this.newActorDisplay = `The new added actor name is ${this.newActor.name} and city is ${this.newActor.city}`
    alert(this.newActorDisplay);

  }
}
