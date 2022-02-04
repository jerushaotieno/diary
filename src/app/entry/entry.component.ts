import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  diaryEntry:Entry[] = [
    new Entry(1, 'Daily Positive Affirmation', 'Encourage yourself daily', new Date(2022, 3,14)),
    new Entry(2, 'Daily Study', 'Choose an area of academic study to handle', new Date(2022, 3,14)),
    new Entry(3, 'Daily Workout', 'Plan for daily physical exercises', new Date(2022,3,14))
  ];

  toggleDetails(index:number){
    this.diaryEntry[index].showDescription = !this.diaryEntry[index].showDescription;
  }

  completeGoal(isComplete: any, index:number){
    if (isComplete) {
      this.diaryEntry.splice(index,1);
    }

    deleteEntry(isComplete, index);{
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.diaryEntry[index].name}?`)
  
        if (toDelete){
          this.diaryEntry.splice(index,1)
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function deleteEntry(isComplete: any, index: number) {
  throw new Error('Function not implemented.');
}

