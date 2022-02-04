import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaryEntry:string[];

  constructor(){
    this.diaryEntry = ['Daily Positive Affirmation', ' Daily Study', ' Daily Workout']
  }
}
