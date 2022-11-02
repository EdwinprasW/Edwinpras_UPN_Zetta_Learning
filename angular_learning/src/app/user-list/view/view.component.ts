import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userData, userDone } from '../users/users.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Output ('userIsDone') onAddDone : EventEmitter<userData> = new EventEmitter<userData>()
  @Input() users!: userDone[];
 

  constructor() { }

  ngOnInit(): void {
  }

}
