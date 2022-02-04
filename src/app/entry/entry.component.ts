import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  diaryEntry:Entry[] = [
    {id:1, name:'Daily Positive Affirmation', description:'Encourage yourself daily'},
    {id:2, name:'Daily Study', description:'Choose an area of academic study to handle'},
    {id:3, name:'Daily Workout', description:'Plan for daily physical exercises'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
