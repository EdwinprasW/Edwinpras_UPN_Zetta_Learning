import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Tes1Module { }
