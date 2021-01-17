import { Component, OnInit } from '@angular/core';
import { DECKS } from '../decks';
import { Cards, Card } from 'scryfall-sdk';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  decks = DECKS;
  cardImage;
  set;

  persist(key: string, value: any) {
    this.localStorageService.set(key, value);
  }

  ngOnInit(): void {
    this.getCardImage();
    this.set = this.localStorageService.get('set');
  }

  getCardImage(): void {
    let card: Card;

    Cards.bySet('khm', 1).then(result => this.cardImage = result.image_uris.normal);
  }
}
