import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface albumList{
  name: string,
  ratingOutOfTen: number,
  artist : string
}

export interface LikedAlbums{
  name: string,
  ratingOutOfTen: number,
  artist : string
}



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

  @Output ('albumLiked') onlikeAlbum : EventEmitter<albumList> = new EventEmitter<albumList>()

  public theAlbums: albumList[] = [
    {name: 'Straight Outta Compton', ratingOutOfTen: 9, artist : 'NWA'},
    {name: 'Vessel', ratingOutOfTen: 8, artist : 'Twenty One Pilots'},
    {name: 'Deviltown', ratingOutOfTen: 7,  artist : 'Cavetown'},
    {name: 'Trench', ratingOutOfTen: 10,  artist : 'Twenty One Pilots'},
    {name: 'Slim Shady LP', ratingOutOfTen: 9,  artist : 'Eminem'},
  ]

  public likedAlbum : LikedAlbums[]=[];

  likeAlbum(theAlbum : albumList){
    this.onlikeAlbum.emit(theAlbum)
    this.likedAlbum.push({...theAlbum})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
