import { Component } from '@angular/core';
import { Entry } from './entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaryEntry:Entry[] = [
    {id:1, name:'Daily Positive Affirmation'},
    {id:2, name:'Daily Study'},
    {id:3, name:'Daily Workout'}
  ];

}
