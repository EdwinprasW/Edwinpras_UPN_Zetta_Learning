import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './tes1/albums/albums.component';
import { LikedComponent } from './tes1/liked/liked.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
