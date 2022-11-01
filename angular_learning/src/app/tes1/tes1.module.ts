import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { PaymentComponent } from './payment/payment.component';
import { LikedComponent } from './liked/liked.component';
import { AlbumListComponent } from './album-list/album-list.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    PaymentComponent,
    LikedComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Tes1Module { }
