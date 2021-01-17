import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CardImageComponent } from './card-image/card-image.component';
import { AppRoutingModule } from './app-routing.module';
import { DecksComponent } from './decks/decks.component';

@NgModule({
  declarations: [
    AppComponent,
    CardImageComponent,
    DecksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
