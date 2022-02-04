import { Component } from '@angular/core';
import { Entry } from './entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  diaryEntry:Entry[] = [
    new Entry(1, 'Daily Positive Affirmation', 'Encourage yourself daily', new Date(2022, 3,14)),
    new Entry(2, 'Daily Study', 'Choose an area of academic study to handle', new Date(2022, 3,14)),
    new Entry(3, 'Daily Workout', 'Plan for daily physical exercises', new Date(2022,3,14))
  ];

}
