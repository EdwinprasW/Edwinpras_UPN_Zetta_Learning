import { Component, OnInit, Input } from '@angular/core';
import { LikedAlbums } from '../albums/albums.component';


@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {

  @Input() liked!: LikedAlbums[];

  constructor() { }

  ngOnInit(): void {
  }

}
