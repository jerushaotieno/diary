// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-entry-form',
//   templateUrl: './entry-form.component.html',
//   styleUrls: ['./entry-form.component.css']
// })
// export class EntryFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newGoal = new Entry(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
