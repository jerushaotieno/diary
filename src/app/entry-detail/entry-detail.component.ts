import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input()
  entry!: Entry;
  @Output() isComplete = new EventEmitter<boolean>();

  entryComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  entryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

 constructor() { }

  ngOnInit(): void {
  }

}
