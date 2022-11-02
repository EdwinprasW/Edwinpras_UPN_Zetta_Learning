import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface userData{
  name: string,
  status: string,
  done : boolean
}

export interface userDone{
  name: string,
  status: string,
  done : boolean
}





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output ('userIsDone') onAddDone : EventEmitter<userData> = new EventEmitter<userData>()

  public users: userData[] = [
    {name: 'Faisal', status:'Student', done : false},
    {name: 'Edwin', status:'Student', done : false},
    {name: 'Zaidan', status:'Student', done : false},
    {name: 'Yance', status:'Lecturer', done :false},
    {name: 'Eko', status:'Admin', done : false},
    {name: 'Awgi', status:'Lecturer', done : false}
  ]

  public userDone : userDone[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  addDone(userDone :userDone){
      this.userDone.push({...userDone, done : true})
  }


}
