import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardImageComponent } from './card-image/card-image.component';
import { DecksComponent } from './decks/decks.component';


const routes: Routes = [
  { path : 'card-image', component: CardImageComponent},
  { path : 'decks', component : DecksComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
