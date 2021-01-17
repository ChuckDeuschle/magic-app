import { Component, OnInit } from '@angular/core';
import { DECKS } from '../decks';
import { Cards, Card } from 'scryfall-sdk';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  constructor() { }

  decks = DECKS;
  cardImage;

  ngOnInit(): void {
    this.getCardImage();
  }

  getCardImage(): void {
    let card: Card;

    Cards.bySet('khm', 1).then(result => this.cardImage = result.image_uris.normal);
  }
}
