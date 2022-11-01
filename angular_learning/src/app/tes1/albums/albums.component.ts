import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface albumList{
  name: string,
  ratingOutOfTen: number,
  artist : string,
  show :boolean
}



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

  @Output ('albumLiked') onlikeAlbum : EventEmitter<albumList> = new EventEmitter<albumList>()

  public theAlbums: albumList[] = [
    {name: 'Straight Outta Compton', ratingOutOfTen: 9, artist : 'NWA', show : true},
    {name: 'Vessel', ratingOutOfTen: 8, artist : 'Twenty One Pilots',show : true},
    {name: 'Deviltown', ratingOutOfTen: 7,  artist : 'Cavetown',show : true},
    {name: 'Trench', ratingOutOfTen: 10,  artist : 'Twenty One Pilots',show : true},
    {name: 'Slim Shady LP', ratingOutOfTen: 9,  artist : 'Eminem',show : true},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
